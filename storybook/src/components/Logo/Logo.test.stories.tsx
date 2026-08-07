/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Logo } from '@amsterdam/design-system-react/src'
import { logoBrands } from '@amsterdam/design-system-react/src/Logo/Logo'

import { default as logoMeta } from './Logo.stories'

const meta = {
  ...logoMeta,
  title: 'Components/Media/Logo',
} satisfies Meta<typeof Logo>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  /*
   * Every brand by hand rather than a generated matrix. `brand` takes a LogoBrandConfig as well as a brand
   * name, so the docgen analyser resolves it to neither an enum nor a boolean and a matrix would find no
   * values for it. The list below is the whole set anyway, and it is the only prop worth a picture.
   */
  render: (args) => (
    <div className="_ams-tests-grid">
      {[undefined, ...logoBrands].map((brand) => (
        <Logo {...args} brand={brand} key={brand} />
      ))}
    </div>
  ),
  tags: ['!dev', '!autodocs', '!manifest'],
}
