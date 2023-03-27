/**
 * @license EUPL-1.2+
 * Copyright (c) 2022 Gemeente Utrecht
 * Copyright (c) 2022 Frameless B.V.
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import React from 'react'

export const argTypes = {
  size: {
    control: { type: 'select', labels: { undefined: 'default', large: 'large', small: 'small' } },
    options: [undefined, 'large', 'small'],
  },
}

export const defaultArgs = {
  textContent: 'Jouw typograaf biedt mij zulke exquise schreven!',
}

export const Paragraph = ({ textContent = defaultArgs.textContent, size = defaultArgs.size }) => (
  <p className={clsx('amsterdam-paragraph', size && `amsterdam-paragraph-${size}`)}>{textContent}</p>
)

export default Paragraph
