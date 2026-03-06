/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { LandingPage as LandingPageComponent } from './LandingPage'
import { WithMultipleQuestions as WithMultipleQuestionsComponent } from './WithMultipleQuestions'
import { WithOneQuestion as WithOneQuesionComponent } from './WithOneQuestion'
import { WithValidationError as WithValidationErrorComponent } from './WithValidationError'

const meta = {
  title: 'Pages/Public/Form Flow',
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

export const WithValidationError: StoryObj = {
  render: () => <WithValidationErrorComponent />,
}
