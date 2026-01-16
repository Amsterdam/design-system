/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { PropsWithChildren } from 'react'

import './code.css'

export const Code = ({ children }: PropsWithChildren) => {
  return <code className="ams-storybook-code sb-unstyled">{children}</code>
}
