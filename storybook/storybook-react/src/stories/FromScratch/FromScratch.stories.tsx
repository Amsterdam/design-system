import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FromScratch } from '../../../../../packages/components-react/src';
import { argTypes } from './argTypes';
import '../../../../../packages/components-css/from-scratch/from-scratch.scss';

export default {
  title: 'React Components/FromScratch',
  id: 'from-scratch',
  component: FromScratch,
  argTypes,
} as ComponentMeta<typeof FromScratch>;

const Template: ComponentStory<typeof FromScratch> = (args) => <FromScratch {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Click me!',
};
