/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { FormErrorList } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Forms/Form Error List',
  component: FormErrorList,
  args: {
    errors: [
      { id: '#', label: 'Vul een geldige datum in (bijvoorbeeld 6 januari 2030).' },
      { id: '#', label: 'De geldigheidsdatum van uw paspoort moet in de toekomst liggen.' },
    ],
    focusOnRender: false,
  },
} satisfies Meta<typeof FormErrorList>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
