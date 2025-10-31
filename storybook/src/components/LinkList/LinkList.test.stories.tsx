/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { LinkList } from '@amsterdam/design-system-react/src'
import { linkListLinkColors, linkListLinkSizes } from '@amsterdam/design-system-react/src/LinkList/LinkListLink'

import { default as linkListMeta } from './LinkList.stories'

const meta = {
  ...linkListMeta,
  title: 'Components/Navigation/Link List',
} satisfies Meta<typeof LinkList>

export default meta

type Story = StoryObj<typeof meta>

const options = ['Link 1', 'Link 2', 'Link 3']

export const Test: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ams-space-s)' }}>
      {linkListLinkSizes.map((size) => {
        return linkListLinkColors.map((color) => {
          return (
            <LinkList
              key={color}
              style={color === 'inverse' ? { backgroundColor: 'var(--ams-color-highlight-azure)' } : undefined}
              {...args}
            >
              {options.map((option) => (
                <LinkList.Link
                  className={options.indexOf(option) === options.length - 1 ? 'hover' : undefined}
                  color={color}
                  href="#"
                  key={option}
                  size={size}
                >
                  {option}
                </LinkList.Link>
              ))}
            </LinkList>
          )
        })
      })}
    </div>
  ),
  tags: ['!dev', '!autodocs'],
}
