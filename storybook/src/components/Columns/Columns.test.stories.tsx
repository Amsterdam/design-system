/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { LinkList } from '@amsterdam/design-system-react'
import { Columns } from '@amsterdam/design-system-react/src'
import { expect, within } from 'storybook/test'

import { default as columnsMeta } from './Columns.stories'

const meta = {
  ...columnsMeta,
  title: 'Components/Layout/Columns',
} satisfies Meta<typeof Columns>

export default meta

type Story = StoryObj<typeof meta>

const items = [
  'Afval',
  'Bestuur en organisatie',
  'Atletiekgebouw met ruimte voor vergaderen, wedstrijdsecretariaat, 2 kleedkamers, invalidentoilet en ruimte voor scheidsrechters en EHBO',
  'Burgerzaken',
  'Leefomgeving',
  'Multifunctioneel verenigingsgebouw met 8 kleedkamers en sportkantine',
  'Ondernemen',
  'Parkeren',
  'Wonen, bouwen en verbouwen',
]

export const Test: Story = {
  args: {
    children: (
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    ),
  },
  play: async ({ canvas, canvasElement, step }) => {
    await step('Columns: keep link list items aligned and unbroken', async () => {
      await canvasElement.ownerDocument.fonts.ready

      const linkList = within(canvas.getAllByRole('list')[1])
      const items = linkList.getAllByRole('listitem')
      const links = linkList.getAllByRole('link')
      const rects = items.map((item) => item.getBoundingClientRect())
      const firstTop = rects[0].top

      for (const [index, rect] of rects.entries()) {
        if (index === 0 || Math.abs(rect.left - rects[index - 1].left) > 1) {
          await expect(Math.abs(rect.top - firstTop)).toBeLessThan(1)
        }

        const linkRect = links[index].getBoundingClientRect()

        await expect(linkRect.top).toBeGreaterThanOrEqual(rect.top)
        await expect(linkRect.bottom).toBeLessThanOrEqual(rect.bottom)
      }
    })
  },
  render: (args) => (
    <div className="_ams-tests-stack">
      <Columns {...args} />
      <Columns>
        <LinkList>
          {items.map((item) => (
            <LinkList.Link href="#" key={item}>
              {item}
            </LinkList.Link>
          ))}
        </LinkList>
      </Columns>
    </div>
  ),
  tags: ['!dev', '!autodocs', '!manifest'],
}
