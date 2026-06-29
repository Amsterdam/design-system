/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

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
