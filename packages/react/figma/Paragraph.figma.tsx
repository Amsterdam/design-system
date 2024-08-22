import figma from '@figma/code-connect'
import React from 'react'
import { Paragraph } from '../src/Paragraph/Paragraph'

figma.connect(
  Paragraph,
  'https://www.figma.com/design/9IGm6IdPUYizBNGsUnueBd/Amsterdam-Design-System?node-id=16364-106794&t=Od9dksKcZUhrKlOd-11',
  {
    props: {
      text: figma.string('Text'),
      size: figma.enum('Size', {
        Small: 'small',
        Large: 'large',
      }),
    },
    example: ({ text, size }) => <Paragraph size={size}>{text}</Paragraph>,
  },
)
