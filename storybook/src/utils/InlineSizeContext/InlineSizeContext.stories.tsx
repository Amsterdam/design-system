/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Paragraph } from '@amsterdam/design-system-react'

import { InlineSizeContext } from './InlineSizeContext'

const meta = {
  title: 'Utilities/CSS/Inline Size Context',
  component: InlineSizeContext,
} satisfies Meta<typeof InlineSizeContext>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <>
      <style>{`
        .ams-inline-size-context-demo {
          background-color: var(--ams-color-highlight-yellow);
          padding: 1rem;

          @container ams-inline-size-context (min-inline-size: 20rem) {
            background-color: var(--ams-color-highlight-azure);
          }
        }
      `}</style>
      <InlineSizeContext className="ams-inline-size-context _ams-resize-horizontal" style={{ inlineSize: '14rem' }}>
        <div className="ams-inline-size-context-demo">
          <Paragraph>Below 20 rem, the background is yellow. At 20 rem and above, it is azure.</Paragraph>
        </div>
      </InlineSizeContext>
    </>
  ),
}
