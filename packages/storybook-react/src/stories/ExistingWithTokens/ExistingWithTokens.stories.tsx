import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ExistingWithTokens } from '../../../../component-library-react/src';
import { argTypes } from './argTypes';
import '@utrecht/components/button-link/css/index.scss';

export default {
  title: 'React Component/ExistingWithTokens',
  id: 'react-button',
  component: ExistingWithTokens,
  argTypes,
} as ComponentMeta<typeof ExistingWithTokens>;

const Template: ComponentStory<typeof ExistingWithTokens> = (args) => <ExistingWithTokens {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Click me!',
};
