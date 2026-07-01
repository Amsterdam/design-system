/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Decorator } from '@storybook/react-vite'

import { useEffect } from 'react'
import { useArgs } from 'storybook/preview-api'

export const localeArgTypes = {
  dir: {
    control: {
      labels: { undefined: 'ltr (default)' },
      type: 'inline-radio',
    },
    description: 'Derived from `locale`; set to `rtl` automatically when Arabic is selected.',
    options: [undefined, 'rtl'],
    table: { readonly: true },
  },
  locale: {
    control: {
      labels: {
        'ar-MA': 'العربية (Arabic)',
        'de-DE': 'Deutsch (German)',
        'en-GB': 'English (English)',
        'fr-FR': 'Français (French)',
        'tr-TR': 'Türkçe (Turkish)',
        undefined: 'Nederlands (Dutch)',
      },
      type: 'select',
    },
    options: [undefined, 'en-GB', 'de-DE', 'fr-FR', 'tr-TR', 'ar-MA'],
  },
} as const

/** Keeps the readonly `dir` control in sync with `locale`; Arabic sets it to `rtl`, all others clear it. */
export const SyncDirFromLocale: Decorator = (Story) => {
  const [{ dir, locale }, updateArgs] = useArgs()
  useEffect(() => {
    const derivedDir = locale === 'ar-MA' ? 'rtl' : undefined
    if (dir !== derivedDir) updateArgs({ dir: derivedDir })
  }, [locale]) // eslint-disable-line react-hooks/exhaustive-deps
  return <Story />
}

type BuildProps = (dir: string | null, locale: string | null) => Array<string | null>

type SourceTransformCtx = { args: Record<string, unknown> }

/**
 * Creates a Storybook `docs.source.transform` that injects `locale` and `dir` from the live controls.
 * `buildProps` receives both as `string | null` — place them alphabetically among your fixed prop strings.
 */
export const localeSourceTransform =
  (componentName: string, buildProps: BuildProps, prefix?: string) =>
  (_src: string, { args }: SourceTransformCtx): string => {
    const dir = args['locale'] === 'ar-MA' ? 'dir="rtl"' : null
    const locale = args['locale'] ? `locale="${String(args['locale'])}"` : null
    const props = buildProps(dir, locale).filter(Boolean) as string[]
    const multiLine = props.length > 1 || props.some((p) => p.includes('\n'))
    const jsx = multiLine ? `<${componentName}\n  ${props.join('\n  ')}\n/>` : `<${componentName} ${props[0]} />`
    return prefix ? `${prefix}\n\n${jsx}` : jsx
  }
