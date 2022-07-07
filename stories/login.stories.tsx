import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';


import { Input } from '../components/input/Input';
import Login from '../pages/login/login';

export default {
  title: 'Example/Login',
  component: Input,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Login>;

const InputTemplate: ComponentStory<typeof Login> = (args) => <Input {...args} />;

export const LoginExample = InputTemplate.bind({});

LoginExample.args = {};