import { ComponentMeta, ComponentStory } from '@storybook/react';
import '../../../../../components/existing-with-bem/existing-with-bem.scss';
import { ExistingWithBem } from '../../../../component-library-react/src';
import { argTypes } from './argTypes';

export default {
  title: 'React Component/ExistingWithBem',
  id: 'react-existing-with-bem',
  component: ExistingWithBem,
  argTypes,
} as ComponentMeta<typeof ExistingWithBem>;

const Template: ComponentStory<typeof ExistingWithBem> = (args) => <ExistingWithBem {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Click me!',
};
