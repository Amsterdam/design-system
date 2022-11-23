import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FromScratch } from '../../../../component-library-react/src';
import { argTypes } from './argTypes';
import '../../../../../components/from-scratch/from-scratch.scss';

export default {
  title: 'React Component/FromScratch',
  id: 'from-scratch',
  component: FromScratch,
  argTypes,
} as ComponentMeta<typeof FromScratch>;

const Template: ComponentStory<typeof FromScratch> = (args) => <FromScratch {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Click me!',
};
