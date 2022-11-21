import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '../../../../component-library-react/src';
import { argTypes } from './argTypes';

export default {
  title: 'React Component/Button',
  id: 'react-button',
  component: Button,
  argTypes,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Click me!',
};
