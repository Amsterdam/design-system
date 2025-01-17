import type { HeadingProps } from './Heading'

export const getHeadingTag = (level: HeadingProps['level']): `h${HeadingProps['level']}` => `h${level}`
