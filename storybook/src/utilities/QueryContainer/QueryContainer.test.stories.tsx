/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Paragraph } from '@amsterdam/design-system-react'

import { QueryContainer } from './QueryContainer'
import { default as queryContainerMeta } from './QueryContainer.stories'

const meta = {
  ...queryContainerMeta,
  title: 'Utilities/CSS/Query Container',
} satisfies Meta<typeof QueryContainer>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: () => (
    <>
      <style>{`
        ._ams-colored-box {
          background-color: var(--ams-color-highlight-yellow);
          padding: 1rem;

          @container ams-query-container-inline-size (inline-size >= 20rem) {
            background-color: var(--ams-color-highlight-lime);
          }
        }
      `}</style>
      <div className="_ams-tests-stack">
        {/* Below and above the 20rem threshold, so both sides of the container query are covered.
            The story omits the resize affordance of the presentation story: its outline and scrollbars
            would show up in the snapshot without saying anything about the utility. */}
        {['16rem', '24rem'].map((inlineSize) => (
          <QueryContainer className="ams-query-container-inline-size" key={inlineSize} style={{ inlineSize }}>
            <div className="_ams-colored-box">
              <Paragraph>This yellow background becomes lime if the query container is wider than 20rem.</Paragraph>
            </div>
          </QueryContainer>
        ))}
      </div>
    </>
  ),
  tags: ['!dev', '!autodocs', '!manifest'],
}
