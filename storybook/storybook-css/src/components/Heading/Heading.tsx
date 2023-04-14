/*
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 * Copyright (c) 2022-2023 Gemeente Amsterdam.
 */

import { Heading as HeadingComponent } from '@amsterdam/design-system-react/src'
import React, { PropsWithChildren } from 'react'

import '@amsterdam/design-system-css/src/heading/heading.scss'

// TODO import from Heading component
type Levels = 1 | 2 | 3 | 4 | 5 | 6

interface HeadingProps {
  children?: React.ReactNode
  textContent?: string
  level?: Levels
  styleLevel?: Levels
}

export const Heading = ({
  children = null,
  textContent = '',
  level = 1,
  styleLevel = 1,
}: PropsWithChildren<HeadingProps>) => (
  <HeadingComponent level={level} styleLevel={styleLevel}>
    {children}
    {textContent}
  </HeadingComponent>
)

export default Heading
