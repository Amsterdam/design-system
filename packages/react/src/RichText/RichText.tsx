/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { HTMLAttributes } from 'react'

import {
  FormattingBoldIcon,
  FormattingItalicIcon,
  FormattingUnderlineIcon,
  LinkIcon,
  ListIcon,
} from '@amsterdam/design-system-react-icons'
import { clsx } from 'clsx'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { IconButton } from '../IconButton'

export const richTextAllowedElements = [
  'p',
  'strong',
  'em',
  'a',
  'ul',
  'ol',
  'li',
  'h2',
  'h3',
  'h4',
  'blockquote',
  'small',
  'mark',
  'br',
] as const

export type RichTextAllowedElement = (typeof richTextAllowedElements)[number]

export type RichTextProps = {
  /**
   * The HTML elements that the editor is allowed to output.
   * Defaults to the subset of elements that exist in the Amsterdam Design System.
   */
  allowedElements?: readonly RichTextAllowedElement[]
  /**
   * Initial HTML value for the editor when used in uncontrolled mode.
   * The value is sanitized before it is displayed.
   */
  defaultValue?: string
  /**
   * Disables user interaction.
   */
  disabled?: boolean
  /**
   * Called with a sanitized HTML string whenever the content changes.
   */
  onChange?: (value: string) => void
  /**
   * The HTML value of the editor. When provided, the component acts as a controlled component.
   * The value is always sanitized to only contain allowed HTML elements.
   */
  value?: string
} & Omit<HTMLAttributes<HTMLDivElement>, 'children' | 'onChange' | 'role' | 'contentEditable'>

const hasDOM = typeof window !== 'undefined' && typeof document !== 'undefined'

const sanitizeHtml = (html: string, allowedTags: readonly string[]): string => {
  if (!hasDOM || typeof DOMParser === 'undefined') return html

  const parser = new DOMParser()
  const parsed = parser.parseFromString(`<div>${html}</div>`, 'text/html')
  const allowed = new Set(allowedTags.map((tag) => tag.toLowerCase()))

  const sanitizeNode = (node: Node, doc: Document): Node | null => {
    if (node.nodeType === Node.TEXT_NODE) {
      return doc.createTextNode(node.textContent ?? '')
    }

    if (node.nodeType === Node.ELEMENT_NODE) {
      const element = node as HTMLElement
      const originalTag = element.tagName.toLowerCase()

      let tag = originalTag

      if (tag === 'b') tag = 'strong'
      if (tag === 'i') tag = 'em'
      if (tag === 'div' && allowed.has('p')) tag = 'p'

      const isAllowed = allowed.has(tag)

      if (!isAllowed) {
        const fragment = doc.createDocumentFragment()

        for (const child of Array.from(element.childNodes)) {
          const sanitizedChild = sanitizeNode(child, doc)

          if (sanitizedChild) {
            fragment.appendChild(sanitizedChild)
          }
        }

        return fragment
      }

      const sanitizedElement = doc.createElement(tag)

      if (tag === 'a') {
        const href = element.getAttribute('href')

        if (href) {
          sanitizedElement.setAttribute('href', href)
        }

        const rel = element.getAttribute('rel')

        if (rel) {
          sanitizedElement.setAttribute('rel', rel)
        }

        const target = element.getAttribute('target')

        if (target) {
          sanitizedElement.setAttribute('target', target)
        }
      }

      for (const child of Array.from(element.childNodes)) {
        const sanitizedChild = sanitizeNode(child, doc)

        if (sanitizedChild) {
          sanitizedElement.appendChild(sanitizedChild)
        }
      }

      return sanitizedElement
    }

    return null
  }

  const wrapper = parsed.createElement('div')

  for (const child of Array.from(parsed.body.firstChild?.childNodes ?? [])) {
    const sanitizedChild = sanitizeNode(child, parsed)

    if (sanitizedChild) {
      wrapper.appendChild(sanitizedChild)
    }
  }

  return wrapper.innerHTML
}

/**
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-forms-rich-text--docs Rich Text docs at Amsterdam Design System}
 */
export const RichText = ({
  allowedElements = richTextAllowedElements,
  className,
  defaultValue,
  disabled,
  onChange,
  value,
  ...restProps
}: RichTextProps) => {
  const editorRef = useRef<HTMLDivElement | null>(null)
  const [internalValue, setInternalValue] = useState<string>(() =>
    sanitizeHtml(defaultValue ?? '', allowedElements as string[]),
  )

  const currentValue = value ?? internalValue

  const allowedTags = useMemo(() => allowedElements.map((tag) => tag.toLowerCase()), [allowedElements])

  useEffect(() => {
    if (!hasDOM || !editorRef.current) return

    const sanitized = sanitizeHtml(currentValue ?? '', allowedTags)

    if (editorRef.current.innerHTML !== sanitized) {
      editorRef.current.innerHTML = sanitized
    }
  }, [currentValue, allowedTags])

  const emitChange = useCallback(
    (rawHtml: string) => {
      const sanitized = sanitizeHtml(rawHtml, allowedTags)

      if (value === undefined) {
        setInternalValue(sanitized)
      }

      onChange?.(sanitized)
    },
    [allowedTags, onChange, value],
  )

  const handleInput = useCallback(() => {
    if (!hasDOM || !editorRef.current) return

    emitChange(editorRef.current.innerHTML)
  }, [emitChange])

  const applyCommand = useCallback(
    (command: string, valueArg?: string) => {
      if (disabled || !hasDOM) return

      editorRef.current?.focus()
      document.execCommand(command, false, valueArg)
      handleInput()
    },
    [disabled, handleInput],
  )

  const handleCreateLink = useCallback(() => {
    if (disabled || !hasDOM) return

    // eslint-disable-next-line no-alert
    const url = window.prompt('Voer een link-URL in:')

    if (!url) return

    applyCommand('createLink', url)
  }, [applyCommand, disabled])

  return (
    <div {...restProps} aria-disabled={disabled || undefined} className={clsx('ams-rich-text', className)}>
      <div className="ams-rich-text__toolbar">
        <IconButton label="Tekst vet maken" onClick={() => applyCommand('bold')} svg={FormattingBoldIcon} />
        <IconButton label="Tekst cursief maken" onClick={() => applyCommand('italic')} svg={FormattingItalicIcon} />
        <IconButton
          label="Tekst onderstrepen"
          onClick={() => applyCommand('underline')}
          svg={FormattingUnderlineIcon}
        />
        <IconButton label="Opsomming" onClick={() => applyCommand('insertUnorderedList')} svg={ListIcon} />
        <IconButton label="Link invoegen" onClick={handleCreateLink} svg={LinkIcon} />
      </div>

      <div
        aria-label={restProps['aria-label']}
        aria-multiline="true"
        className={clsx('ams-rich-text__area', 'ams-text-area')}
        contentEditable={!disabled}
        onBlur={handleInput}
        onInput={handleInput}
        ref={editorRef}
        role="textbox"
      />
    </div>
  )
}

RichText.displayName = 'RichText'
