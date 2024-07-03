/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Row } from '@amsterdam/design-system-react'
import { Breadcrumb, Icon } from '@amsterdam/design-system-react/src'
import { NewHouseLineIcon } from '@amsterdam/design-system-react-icons'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Navigation/Breadcrumb',
  component: Breadcrumb,
} satisfies Meta<typeof Breadcrumb>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: [
      <Breadcrumb.Link href="#" key={1}>
        <Row gap="extra-small" style={{ display: 'inline-flex', alignItems: 'baseline' }}>
          <Icon svg={NewHouseLineIcon} size="level-6" />
          <span>Home</span>
        </Row>
      </Breadcrumb.Link>,
      <Breadcrumb.Link href="#" key={2}>
        Afval
      </Breadcrumb.Link>,
      <Breadcrumb.Link href="#" key={3}>
        Bedrijfsafval
      </Breadcrumb.Link>,
      <Breadcrumb.Link href="#" key={4}>
        Recyclepunten voor bedrijven
      </Breadcrumb.Link>,
    ],
  },
}
