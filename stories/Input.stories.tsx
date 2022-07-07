import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';


import Input from '../components/input/Input';

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
  placeholder: 'Insert value',
  height: '20px',
  width: '50%',  
};

export const InputTextError = InputTemplate.bind({});

InputTextError.args = {
  type: 'text',
  value: 'Pikachu',
  height: '20px',
  width: '50%',
  isError: true,
  messageError: 'Required value'
};


export const InputTextDisabled = InputTemplate.bind({});

InputTextDisabled.args = {
  type: 'text',  
  height: '20px',
  width: '50%',
  disabled: true
};