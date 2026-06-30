/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import * as Icons from '@amsterdam/design-system-react-icons/src'
import { Icon } from '@amsterdam/design-system-react/src'

import { renderComponentVariants } from '#storybook/_common/renderComponentVariants'

import { default as iconMeta } from './Icon.stories'

const meta = {
  ...iconMeta,
  title: 'Components/Media/Icon',
} satisfies Meta<typeof Icon>

export default meta

type Story = StoryObj<typeof meta>

const iconNames = (Object.keys(Icons) as (keyof typeof Icons)[]).sort((a, b) => a.localeCompare(b))
const directionalIconNames = iconNames.filter((name) => Icons[name]({}).props['data-directional'] === 'true')

export const Test: Story = {
  render: (args, context) => (
    <div className="_ams-tests-stack">
      <p>Variants of Icon component</p>
      {renderComponentVariants(Icon, { args }, context)}
      <p>All icons</p>
      <div className="_ams-tests-grid">
        {iconNames.map((name) => (
          <Icon key={name} size="heading-2" svg={Icons[name]} />
        ))}
      </div>
      <p>Directional icons in RTL</p>
      <div className="_ams-tests-grid" dir="rtl">
        {directionalIconNames.map((name) => (
          <Icon key={name} size="heading-2" svg={Icons[name]} />
        ))}
      </div>
    </div>
  ),
  tags: ['!dev', '!autodocs'],
}
