/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Spotlight } from '@amsterdam/design-system-react/src'
import { spotlightColors } from '@amsterdam/design-system-react/src/Spotlight/Spotlight'

import { default as spotlightMeta } from './Spotlight.stories'

const meta = {
  ...spotlightMeta,
  title: 'Components/Containers/Spotlight',
} satisfies Meta<typeof Spotlight>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ams-space-l)' }}>
      {spotlightColors.map((color) => (
        <Spotlight color={color} key={color}>
          <div style={{ padding: 'var(--ams-space-xl)' }}>
            <h2
              style={
                color === 'yellow' || color === 'orange' || color === 'lime'
                  ? undefined
                  : { color: 'var(--ams-color-text-inverse)' }
              }
            >
              Voetballen is heel simpel, maar het moeilijkste wat er is, is simpel voetballen.
            </h2>
          </div>
        </Spotlight>
      ))}
    </div>
  ),
  tags: ['!dev', '!autodocs'],
}
