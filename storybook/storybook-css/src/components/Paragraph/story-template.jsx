/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Gemeente Utrecht
 * Copyright (c) 2022 Frameless B.V.
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import React from 'react'

export const argTypes = {
  intro: {
    control: 'boolean',
  },
  small: {
    control: 'boolean',
  },
}

export const defaultArgs = {
  textContent: 'Hic sunt dracones!',
  intro: false,
  small: false,
}

export const Paragraph = ({
  textContent = defaultArgs.textContent,
  intro = defaultArgs.intro,
  small = defaultArgs.small,
}) => (
  <p
    className={clsx('amsterdam-paragraph', intro && 'amsterdam-paragraph-intro', small && 'amsterdam-paragraph-small')}
  >
    {textContent}
  </p>
)

export default Paragraph
