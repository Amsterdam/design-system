/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

// The Code Panel generates the source for `render`-function stories with react-element-to-jsx-string.
// That library always prints object and array props on multiple lines for block-level elements, which
// scatters short props like `span={{ narrow: 4, medium: 4, wide: 4 }}` across four lines. There is no
// option to change this, so we post-process the generated code through `docs.source.transform`:
// collapse each multi-line attribute value onto one line, then re-join the opening tags that only
// wrapped because of it – unless the result would exceed the line-length budget.

/**
 * Line-length budget for the Code Panel. Also fed to `parameters.jsx.maxInlineAttributesLineLength` in
 * preview, so the source generator’s attribute wrapping and this transform’s tag re-joining agree.
 */
export const maxInlineWidth = 120

// Walk from an opening bracket (`{` or `[`) to its match, skipping over string contents.
const matchBracket = (code: string, openIndex: number): number => {
  let depth = 0
  let quote: string | null = null

  for (let i = openIndex; i < code.length; i++) {
    const character = code[i]

    if (quote) {
      if (character === '\\') i++
      else if (character === quote) quote = null
    } else if (character === '"' || character === "'" || character === '`') {
      quote = character
    } else if (character === '{' || character === '[') {
      depth++
    } else if (character === '}' || character === ']') {
      depth--
      if (depth === 0) return i
    }
  }

  return -1
}

const collapseWhitespace = (text: string) => text.replace(/\s*\n\s*/g, ' ')

// Return the first non-whitespace character at or after `index`, or '' at the end of the input.
const firstNonSpaceAt = (code: string, index: number): string => {
  let i = index
  while (i < code.length && /\s/.test(code[i] ?? '')) i++
  return code[i] ?? ''
}

// Collapse multi-line object and array attribute values (`name={{…}}` / `name={[…]}`) onto a single
// line. Other expression props are left alone, so a multi-line function body is not flattened into an
// unreadable single line.
const collapseValues = (code: string): string => {
  let out = ''
  let i = 0

  while (i < code.length) {
    // `code[i + 1]` is the expression container brace; peek past it for an object or array literal.
    if (code[i] === '=' && code[i + 1] === '{' && ['[', '{'].includes(firstNonSpaceAt(code, i + 2))) {
      const end = matchBracket(code, i + 1)

      if (end !== -1) {
        const group = code.slice(i + 1, end + 1)
        out += '=' + (group.includes('\n') ? collapseWhitespace(group) : group)
        i = end + 1
        continue
      }
    }

    out += code[i]
    i++
  }

  return out
}

// Find the `>` that closes an opening tag starting at `<`, skipping strings and bracketed expressions
// (so a `>` inside an arrow function or a string does not end the tag early). Returns -1 if malformed.
const findTagEnd = (code: string, ltIndex: number): number => {
  let depth = 0
  let quote: string | null = null

  for (let i = ltIndex + 1; i < code.length; i++) {
    const character = code[i]

    if (quote) {
      if (character === '\\') i++
      else if (character === quote) quote = null
    } else if (character === '"' || character === "'" || character === '`') {
      quote = character
    } else if (character === '{' || character === '[') {
      depth++
    } else if (character === '}' || character === ']') {
      depth--
    } else if (depth === 0 && character === '>') {
      return i
    } else if (depth === 0 && character === '<') {
      return -1
    }
  }

  return -1
}

// Does a newline sit inside a bracketed expression or string (depth > 0), as in a multi-line function
// body? Such tags are left as they are so their inner formatting is not flattened onto one line.
const hasNestedNewline = (tag: string): boolean => {
  let depth = 0
  let quote: string | null = null

  for (let i = 0; i < tag.length; i++) {
    const character = tag[i]

    if (character === '\n' && (depth > 0 || quote)) {
      return true
    } else if (quote) {
      if (character === '\\') i++
      else if (character === quote) quote = null
    } else if (character === '"' || character === "'" || character === '`') {
      quote = character
    } else if (character === '{' || character === '[') {
      depth++
    } else if (character === '}' || character === ']') {
      depth--
    }
  }

  return false
}

// Re-join opening tags that only wrapped because a value did – but keep tags that genuinely overflow.
const collapseTags = (code: string): string => {
  let out = ''
  let i = 0

  while (i < code.length) {
    if (code[i] === '<' && /[A-Za-z]/.test(code[i + 1] ?? '')) {
      const end = findTagEnd(code, i)

      if (end !== -1) {
        const tag = code.slice(i, end + 1)

        if (tag.includes('\n') && !hasNestedNewline(tag)) {
          const indent = out.length - out.lastIndexOf('\n') - 1
          const collapsed = collapseWhitespace(tag)
            .replace(/\s+>$/, '>')
            .replace(/\s+\/>$/, ' />')

          if (indent + collapsed.length <= maxInlineWidth) {
            out += collapsed
            i = end + 1
            continue
          }
        }
      }
    }

    out += code[i]
    i++
  }

  return out
}

/** Collapses the multi-line object and array props that the Code Panel’s source generator expands. */
export const collapseInlineObjects = (code: string): string => collapseTags(collapseValues(code))
