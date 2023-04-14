/*
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 * Copyright (c) 2022-2023 Gemeente Amsterdam.
 */

import { Paragraph as ParagraphComponent } from '@amsterdam/design-system-react'
import React, { PropsWithChildren } from 'react'

import '@amsterdam/design-system-css/src/paragraph/paragraph.scss'

interface ParagraphProps {
  children?: React.ReactNode
  textContent?: string
  size?: 'small' | 'large' | undefined
}

export const Paragraph = ({
  children = null,
  textContent = '',
  size = undefined,
}: PropsWithChildren<ParagraphProps>) => (
  <ParagraphComponent size={size}>
    {children}
    {textContent}
  </ParagraphComponent>
)

export default Paragraph
