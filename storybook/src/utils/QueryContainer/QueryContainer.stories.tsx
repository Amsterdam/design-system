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
        .ams-query-container-inline-size-demo {
          background-color: var(--ams-color-highlight-yellow);
          padding: 1rem;

          @container ams-query-container-inline-size (min-inline-size: 20rem) {
            background-color: var(--ams-color-highlight-azure);
          }
        }
      `}</style>
      <QueryContainer
        className="ams-query-container-inline-size _ams-resize-horizontal"
        style={{ inlineSize: '14rem' }}
      >
        <div className="ams-query-container-inline-size-demo">
          <Paragraph>Below 20 rem, the background is yellow. At 20 rem and above, it is azure.</Paragraph>
        </div>
      </QueryContainer>
    </>
  ),
}
