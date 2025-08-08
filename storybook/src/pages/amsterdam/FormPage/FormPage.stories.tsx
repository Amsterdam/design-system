/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Meta, StoryObj } from '@storybook/react-vite'
import { LandingPage } from './LandingPage'
import { WithOneQuestion } from './WithOneQuestion'

const meta = {
  title: 'Pages/Amsterdam.nl/Form Page',
  component: LandingPage,
  parameters: {
    layout: 'fullscreen',
    themes: { themeOverride: 'Spacious' },
  },
} satisfies Meta<typeof LandingPage>

export default meta

export const Default: StoryObj = {}

export const WithOneQuestionPage: StoryObj = {
  render: () => <WithOneQuestion />,
}
