/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { InvalidFormAlert } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'Components/Forms/Invalid Form Alert',
  component: InvalidFormAlert,
  args: {
    errors: [
      { id: '#', label: 'Vul een geldige datum in (bijvoorbeeld 6 januari 2030).' },
      { id: '#', label: 'De geldigheidsdatum van uw paspoort moet in de toekomst liggen.' },
    ],
    focusOnRender: false,
    headingLevel: 2,
  },
} satisfies Meta<typeof InvalidFormAlert>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
