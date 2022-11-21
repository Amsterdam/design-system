import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ExampleCustomComponent } from '../../../../component-library-react/src';
import { argTypes } from './argTypes';

export default {
  title: 'React Component/ExampleCustomComponent',
  id: 'react-example-custom-component',
  component: ExampleCustomComponent,
  argTypes,
} as ComponentMeta<typeof ExampleCustomComponent>;

const Template: ComponentStory<typeof ExampleCustomComponent> = (args) => <ExampleCustomComponent {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Read more...',
};
