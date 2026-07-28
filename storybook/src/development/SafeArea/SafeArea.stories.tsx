/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { SafeArea } from './SafeArea'

/**
 * A development aid, not a component. It reads the four safe area insets back on screen, so that
 * testing a device with a display cutout doesn’t depend on eyeballing the layout.
 *
 * Two things have to be true before the insets report anything other than `0px`:
 *
 * - the story runs in a top-level browsing context, so open `iframe.html` rather than the manager;
 * - the page opts into the full window with `viewport-fit=cover`, which `config/main.ts` adds to
 *   the preview’s viewport meta element.
 *
 * The story says which of the two is missing. Remove this section once we have decided whether the
 * readout is worth keeping.
 */
const meta = {
  title: 'Development/Safe Area',
  component: SafeArea,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof SafeArea>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
