import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';


import { Input } from '../components/Input';

export default {
  title: 'Example/Input',
  component: Input,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Input>;

const InputTemplate: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const InputText = InputTemplate.bind({});

InputText.args = {
  type: 'text',
  value: 'Pikachu'   
};