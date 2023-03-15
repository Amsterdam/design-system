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

export const Heading = ({
  textContent = defaultArgs.textContent,
  level = defaultArgs.intro,
  styleLevel = defaultArgs.small,
}) =>
  React.createElement(
    `h${level}`,
    { className: clsx('amsterdam-heading', `amsterdam-heading-${styleLevel}`) },
    textContent,
  )

export default Heading
