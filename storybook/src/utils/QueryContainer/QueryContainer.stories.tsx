/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Paragraph } from '@amsterdam/design-system-react'

import { QueryContainer } from './QueryContainer'

const meta = {
  title: 'Utilities/CSS/Query Container',
  component: QueryContainer,
} satisfies Meta<typeof QueryContainer>

export default meta

type Story = StoryObj<typeof meta>

export const InlineSize: Story = {
  render: () => (
    <>
      <style>{`
        ._ams-box-with-background-color {
          background-color: var(--ams-color-highlight-yellow);
          padding: 1rem;

          @container ams-query-container-inline-size (min-inline-size: 20rem) {
            background-color: var(--ams-color-highlight-lime);
          }
        }
      `}</style>
      <QueryContainer
        className="ams-query-container-inline-size _ams-resize-horizontal"
        style={{ inlineSize: '16rem' }}
      >
        <div className="_ams-box-with-background-color">
          <Paragraph>This yellow background becomes lime if the query container is wider than 20rem.</Paragraph>
        </div>
      </QueryContainer>
    </>
  ),
}
