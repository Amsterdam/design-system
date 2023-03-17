/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Gemeente Utrecht
 * Copyright (c) 2022 Frameless B.V.
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import React from 'react'

export const argTypes = {
  textContent: {
    table: {
      type: { summary: 'string' },
    },
  },
  level: {
    options: [1, 2, 3, 4, 5, 6],
    control: 'select',
    table: {
      type: { summary: 'number' },
      defaultValue: { summary: '1' },
    },
  },
  styleLevel: {
    options: [1, 2, 3, 4, 5, 6],
    control: 'select',
    table: {
      type: { summary: 'number' },
      defaultValue: { summary: '1' },
    },
  },
}

export const defaultArgs = {
  textContent: 'Jouw typograaf biedt mij zulke exquise schreven!',
  level: 1,
  styleLevel: 1,
}

export const heading2Args = {
  ...defaultArgs,
  level: 2,
  styleLevel: 2,
}

export const heading3Args = {
  ...defaultArgs,
  level: 3,
  styleLevel: 3,
}

export const heading4Args = {
  ...defaultArgs,
  level: 4,
  styleLevel: 4,
}

export const heading5Args = {
  ...defaultArgs,
  level: 5,
  styleLevel: 5,
}

export const heading6Args = {
  ...defaultArgs,
  level: 6,
  styleLevel: 6,
}

export const Heading = ({
  textContent = defaultArgs.textContent,
  level = defaultArgs.level,
  styleLevel = defaultArgs.styleLevel,
}) =>
  React.createElement(
    `h${level}`,
    { className: clsx('amsterdam-heading', `amsterdam-heading-${styleLevel}`) },
    textContent,
  )

export default Heading
