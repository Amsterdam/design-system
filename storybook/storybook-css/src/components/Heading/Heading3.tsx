/*
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 * Copyright (c) 2022-2023 Gemeente Amsterdam.
 */

import { Heading } from '@amsterdam/design-system-react/src'

import '@amsterdam/design-system-css/src/heading/heading.scss'

export const Heading3 = ({ children = null, textContent = '' }) => (
  <Heading level={3} styleLevel={3}>
    {children}
    {textContent}
  </Heading>
)

export default Heading3
