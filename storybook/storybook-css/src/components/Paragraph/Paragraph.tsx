/*
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 * Copyright (c) 2022-2023 Gemeente Amsterdam.
 */

import { Paragraph as ParagraphComponent } from '@amsterdam/design-system-react/src'

import '@amsterdam/design-system-css/src/paragraph/paragraph.scss'

export const Paragraph = ({ children = null, textContent = '', size = undefined }) => (
  <ParagraphComponent size={size}>
    {children}
    {textContent}
  </ParagraphComponent>
)

export default Paragraph
