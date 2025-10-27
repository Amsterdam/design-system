/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Row } from '@amsterdam/design-system-react/src'

import { getVariants } from '../../utils/getVariants'
import { default as rowMeta } from './Row.stories'

const meta = {
  ...rowMeta,
  title: 'Components/Layout/Row',
} satisfies Meta<typeof Row>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: (args) =>
    getVariants({
      component: Row,
      args,
      children: (
        <>
          <div className="ams-docs-item" />
          <div className="ams-docs-item" />
          <div className="ams-docs-item" />
        </>
      ),
    }),
  tags: ['!dev', '!autodocs'],
}
