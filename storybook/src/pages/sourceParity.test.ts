/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'

/*
 * A page template holds its guidance twice: once as JSX in `render`, once in the hand-written
 * `parameters.docs.source.code` that the Code Panel prints. Nothing keeps the two in step, and they drift
 * silently — a comment reworded in one copy, a property changed in the other, and the panel starts showing
 * markup the page no longer has. See documentation/code-panel-source.md.
 *
 * Three checks per story: the source sets `language: 'tsx'`, the comment sets are identical, and the markup
 * matches once the whitespace JSX itself collapses is normalised away.
 */

const pagesDirectory = fileURLToPath(new URL('.', import.meta.url))

const STORY = /^export const (\w+)(?::\s*\w+(?:<[^>]*>)?)?\s*=\s*\{$/gm
const ARROW_RENDER = /render: (?:\([^)]*\)|\w+) => \(\n([\s\S]*?)\n(\s*)\),\n/
const BLOCK_RETURN = /\n([ \t]*)return \(\n([\s\S]*?)\n\1\)\n/
const META = /^const meta = \{([\s\S]*?)^\} satisfies/m

/**
 * Differences that are correct as they stand, or that are known bugs in a template rather than in this check.
 * Each entry names the kinds of difference tolerated for that story, so an unrelated regression still fails.
 *
 * This list is fail-closed: a story that stops differing fails the test until its entry is removed. Nothing
 * here excuses a new template, which gets no entry and so is gated strictly.
 */
const acceptedDifferences: Record<string, { kinds: Array<'comments' | 'markup'>; reason: string }> = {
  'internal/NavigationPage::Default': {
    kinds: ['markup'],
    reason:
      'Known drift: the source omits a Grid Cell the render has, with no ellipsis marking the gap. Worth fixing in the template.',
  },
  'public/ArticlePage::Default': {
    kinds: ['markup'],
    reason:
      'Known drift: the source drops a sentence its render shows, with no ellipsis marking the gap. Worth fixing in the template.',
  },
  'public/HandbookPage::Default': {
    kinds: ['comments'],
    reason:
      'Known drift: the comment about aria-current sits only in the source, so the render is missing it. Worth fixing in the template.',
  },
  'public/HomePage::Default': {
    kinds: ['comments'],
    reason:
      'Correct as it stands: the note about reading another story’s args.children explains this story’s own machinery, so it belongs only in the render. It would be noise in markup someone copies.',
  },
}

/**
 * Split markup on the JSX expression containers a source legitimately replaces, returning the literal
 * fragments between them.
 *
 * A `{…}` holding a call, a `.map()`, a template literal or a variable is content the source may swap for the
 * literal text a reader should copy, so it becomes a split point. Two kinds stay in the fragment and are
 * compared character for character: an object literal such as `span={{ narrow: 4, medium: 7, wide: 9 }}`,
 * recognisable by the second `{`, and a plain value such as `level={1}`. Cell sizes and heading levels are
 * exactly where silent drift hurts, so they are never wildcards.
 */
const splitOnExpressions = (text: string): string[] => {
  const fragments: string[] = []
  let current = ''
  let index = 0

  while (index < text.length) {
    if (text[index] !== '{') {
      current += text[index]
      index += 1
      continue
    }

    let depth = 0
    let cursor = index
    while (cursor < text.length) {
      if (text[cursor] === '{') depth += 1
      else if (text[cursor] === '}') {
        depth -= 1
        if (depth === 0) break
      }
      cursor += 1
    }
    if (cursor >= text.length) {
      // Unbalanced, so treat the rest as literal.
      current += text.slice(index)
      break
    }

    const body = text.slice(index + 1, cursor)
    const objectLiteral = body.trimStart().startsWith('{')
    const plainValue = /^\s*(?:\d+(?:\.\d+)?|true|false|null|undefined|'[^']*'|"[^"]*")\s*$/.test(body)
    if (!objectLiteral && !plainValue) {
      fragments.push(current)
      current = ''
    } else {
      current += text.slice(index, cursor + 1)
    }
    index = cursor + 1
  }

  fragments.push(current)
  return fragments
}

/** The JSX of a render, whether written as `=> (…)` or as a block body with a return. */
const findRender = (text: string): string | undefined => {
  const arrow = ARROW_RENDER.exec(text)
  if (arrow) return arrow[1]
  const block = BLOCK_RETURN.exec(text)
  return block ? block[2] : undefined
}

/** Several templates put `render` on the shared meta; their stories then hold only parameters. */
const findMetaRender = (source: string): string | undefined => {
  const meta = META.exec(source)
  return meta ? findRender(meta[1]) : undefined
}

/** Every top-level story export, as [name, body] pairs. */
const findStories = (source: string): Array<[string, string]> => {
  const matches = [...source.matchAll(STORY)]
  return matches.map((match, index) => {
    const end = index + 1 < matches.length ? matches[index + 1].index : source.length
    return [match[1], source.slice(match.index + match[0].length, end)]
  })
}

/**
 * The hand-written source string, whether written inline or held in a module-level constant.
 *
 * A source built by calling a helper, as the Loading Page does to share one shell across its three phases,
 * cannot be compared as text. That is a legitimate shape rather than a missing source, so it is reported as
 * `assembled` and compared by hand.
 */
const findCode = (source: string, body: string): 'assembled' | 'missing' | string => {
  const inline = /code: `([\s\S]*?)`,\n/.exec(body)
  if (inline) return inline[1]

  const named = /code: (\w+)[,\s}]/.exec(body)
  if (!named) return 'missing'

  const constant = new RegExp(`^const ${named[1]} = \`([\\s\\S]*?)\`\n`, 'm').exec(source)
  return constant ? constant[1] : 'assembled'
}

/**
 * Every JSX comment, whitespace- and block-marker-normalised, sorted.
 *
 * A comment that is only an ellipsis marks abbreviated content rather than guidance, so it is dropped.
 * Otherwise every deliberate omission reads as a comment the render is missing.
 */
const findComments = (text: string): string[] =>
  [...text.matchAll(/\{\/\*([\s\S]*?)\*\/\}/g)]
    .map((match) =>
      match[1]
        .replace(/^\s*\*\s?/gm, '')
        .split(/\s+/)
        .join(' ')
        .trim(),
    )
    .filter((comment) => comment.replace(/[… .]/g, '') !== '' && !comment.startsWith('…'))
    .sort()

/**
 * The markup alone: every kind of comment removed, and tag-adjacent whitespace collapsed.
 *
 * Comments come off in three passes, in this order. JSX comments go first, because stripping the plain block
 * form ahead of them would leave a bare pair of braces behind and that reads as a substitutable expression.
 * Line and block comments follow: they are prose about the story rather than markup, both copies use them, and
 * the two do not always use the same form. The Handbook Page writes one sentence as a line comment in its
 * source string and as a block comment in its render, which is not drift.
 *
 * That leaves JSX comments as the only kind compared between the copies, which is the right set: they carry
 * the guidance that travels with markup someone copies.
 *
 * `{' '}` is JSX's way of writing a space that would otherwise be stripped, so it is folded back into one.
 * The two copies often differ on which form they use for the same space.
 */
const normaliseMarkup = (text: string): string =>
  text
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, '')
    .split('\n')
    .filter((line) => !line.trimStart().startsWith('//'))
    .join('\n')
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\{['"] ['"]\}/g, ' ')
    .split(/\s+/)
    .join(' ')
    .replace(/\s*</g, '<')
    .replace(/\s*>\s*/g, '>')

type Verdict = 'abbreviated' | 'drift' | 'match'

/**
 * Match the render against the source. The render is split on the expressions a source may substitute, and
 * its literal fragments must then appear in the source in order.
 */
const compareMarkup = (code: string, render: string, abbreviated: boolean): { detail: string; verdict: Verdict } => {
  const fragments = splitOnExpressions(render)
  const substitutions = fragments.length - 1
  let position = 0

  for (const [index, fragment] of fragments.entries()) {
    if (!fragment) continue

    if (index === 0) {
      if (!code.startsWith(fragment)) {
        return { detail: firstDifference(code, render), verdict: 'drift' }
      }
      position = fragment.length
      continue
    }

    const found = code.indexOf(fragment, position)
    if (found === -1) {
      if (abbreviated) {
        return { detail: 'the source omits content the render has, marked with an ellipsis', verdict: 'abbreviated' }
      }
      return { detail: `render has text the source lacks, from: …${fragment.slice(0, 110)}…`, verdict: 'drift' }
    }
    position = found + fragment.length
  }

  if (substitutions === 0 && position !== code.length) {
    return {
      detail: `source has ${code.length - position} extra characters: …${code.slice(position, position + 110)}…`,
      verdict: 'drift',
    }
  }

  return { detail: `${substitutions} helper substitutions`, verdict: 'match' }
}

const firstDifference = (code: string, render: string): string => {
  const shared = Math.min(code.length, render.length)
  for (let index = 0; index < shared; index += 1) {
    if (code[index] !== render[index]) {
      const start = Math.max(0, index - 70)
      return [`source: …${code.slice(start, index + 40)}…`, `render: …${render.slice(start, index + 40)}…`].join(
        '\n      ',
      )
    }
  }
  const [longer, label] = code.length > render.length ? [code, 'source'] : [render, 'render']
  return `${label} has ${Math.abs(code.length - render.length)} extra characters: …${longer.slice(shared, shared + 110)}…`
}

/** Every page template, as `<public|internal>/<PascalCase>` keys. */
const findTemplates = (): string[] =>
  readdirSync(pagesDirectory, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .flatMap((audience) =>
      readdirSync(join(pagesDirectory, audience.name), { withFileTypes: true })
        .filter((entry) => entry.isDirectory() && entry.name !== 'common')
        .map((template) => `${audience.name}/${template.name}`),
    )
    .sort()

describe.each(findTemplates())('%s', (template) => {
  const [, name] = template.split('/')
  const source = readFileSync(join(pagesDirectory, template, `${name}.stories.tsx`), 'utf8')
  const metaRender = findMetaRender(source)
  const stories = findStories(source).map(([story, body]) => ({
    accepted: acceptedDifferences[`${template}::${story}`] as { kinds: string[]; reason: string } | undefined,
    body,
    code: findCode(source, body),
    render: findRender(body) ?? metaRender,
    story,
  }))

  it('has at least one story to check', () => {
    expect(stories).not.toHaveLength(0)
  })

  // `$story` in the title reads the property, so the name does not need destructuring here.
  describe.each(stories)('$story', ({ accepted, body, code, render }) => {
    /** A source assembled by a helper, and a story with no render of its own, are compared by hand. */
    const comparable = code !== 'assembled' && code !== 'missing' && render !== undefined

    it('hand-writes a Code Panel source', () => {
      // Every page template hand-writes one, so a story reaching this without a source is the odd one out.
      expect(code).not.toBe('missing')
    })

    it("sets language: 'tsx' so the panel highlights the snippet", () => {
      // `language` sorts after `code`, so it follows the literal in the source text.
      expect(body).toContain("language: 'tsx'")
    })

    /*
     * Both checks below assert against `accepted` rather than against ‘no difference’, which is what makes the
     * list fail-closed in both directions: an unlisted story may not differ, and a listed one must, so a
     * difference that gets fixed fails until its entry goes.
     */
    it.skipIf(!comparable)('keeps the same comments in both copies', () => {
      const inCode = findComments(code)
      const inRender = findComments(render as string)
      const onlyInCode = inCode.filter((comment) => !inRender.includes(comment))
      const onlyInRender = inRender.filter((comment) => !inCode.includes(comment))

      expect({ differs: onlyInCode.length + onlyInRender.length > 0, onlyInCode, onlyInRender }).toStrictEqual({
        differs: accepted?.kinds.includes('comments') ?? false,
        onlyInCode,
        onlyInRender,
      })
    })

    it.skipIf(!comparable)('keeps the same markup in both copies', () => {
      const { detail, verdict } = compareMarkup(
        normaliseMarkup(code),
        normaliseMarkup(render as string),
        code.includes('…'),
      )

      // `detail` sits on both sides so it never fails a comparison on its own, and prints with the difference.
      expect({ detail, drifts: verdict === 'drift' }).toStrictEqual({
        detail,
        drifts: accepted?.kinds.includes('markup') ?? false,
      })
    })
  })
})
