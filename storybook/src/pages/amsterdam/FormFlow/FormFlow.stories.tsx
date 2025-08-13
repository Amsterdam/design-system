/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Meta, StoryObj } from '@storybook/react-vite'
import { LandingPage as LandingPageComponent } from './LandingPage'
import { WithMultipleQuestions as WithMultipleQuestionsComponent } from './WithMultipleQuestions'
import { WithOneQuestion as WithOneQuesionComponent } from './WithOneQuestion'

const meta = {
  title: 'Pages/Amsterdam.nl/Form Flow',
  component: LandingPageComponent,
  parameters: {
    layout: 'fullscreen',
    themes: { themeOverride: 'Spacious' },
  },
} satisfies Meta<typeof LandingPageComponent>

export default meta

export const LandingPage: StoryObj = {}

export const WithOneQuestion: StoryObj = {
  render: () => <WithOneQuesionComponent />,
}

export const WithMultipleQuestions: StoryObj = {
  render: () => <WithMultipleQuestionsComponent />,
}
