/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Paragraph } from '@amsterdam/design-system-react'
import { Grid } from '@amsterdam/design-system-react/src'

import { wrapInPage } from '#storybook/_common/decorators'
import { GridColumnsGuide } from '#storybook/_components/GridColumnsGuide/GridColumnsGuide'

import { gridGapAndPaddingArgTypes } from './Grid.argTypes'

const meta = {
  title: 'Components/Layout/Grid',
  component: Grid,
  argTypes: gridGapAndPaddingArgTypes,
  decorators: [wrapInPage],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Grid>

export default meta

type Story = StoryObj<typeof meta>

const StoryTemplate: Story = {
  args: {
    paddingVertical: 'x-large',
  },
  decorators: [
    (Story) => (
      <>
        <GridColumnsGuide />
        <Story />
      </>
    ),
  ],
}

export const Default: Story = {
  ...StoryTemplate,
  args: {
    ...StoryTemplate.args,
    children: [
      <Grid.Cell className="_ams-item" key={1} span="all" />,
      <Grid.Cell className="_ams-item" key={2} span={{ narrow: 4, medium: 4, wide: 8 }} />,
      <Grid.Cell className="_ams-item" key={3} span={4} />,
    ],
  },
}

export const VerticalPadding: Story = {
  ...StoryTemplate,
  args: {
    ...StoryTemplate.args,
    children: <Grid.Cell className="_ams-item" span="all" />,
  },
}

export const VerticalGap: Story = {
  ...StoryTemplate,
  args: {
    ...StoryTemplate.args,
    children: [
      <Grid.Cell className="_ams-item" key={1} span="all" />,
      <Grid.Cell className="_ams-item" key={2} span="all" />,
    ],
  },
}

export const SpanRows: Story = {
  ...StoryTemplate,
  args: {
    children: [
      <Grid.Cell className="_ams-item" key={1} rowSpan={2} span={2} />,
      <Grid.Cell className="_ams-item" key={2} span={{ narrow: 2, medium: 6, wide: 10 }} />,
      <Grid.Cell className="_ams-item" key={3} span={{ narrow: 2, medium: 6, wide: 10 }} />,
    ],
  },
}

export const BackgroundInCompactMode: Story = {
  ...StoryTemplate,
  args: {
    ...StoryTemplate.args,
    children: [
      <Grid.Cell key={1} span={4}>
        <Paragraph>Default</Paragraph>
      </Grid.Cell>,
      <Grid.Cell appearance="flush" key={2} span={4}>
        <Paragraph>Flush</Paragraph>
      </Grid.Cell>,
      <Grid.Cell appearance="transparent" key={3} span={4}>
        <Paragraph>Transparent</Paragraph>
      </Grid.Cell>,
    ],
  },
  decorators: undefined,
}
