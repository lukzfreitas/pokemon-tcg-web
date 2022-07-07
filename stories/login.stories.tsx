import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Login from '../components/login/login';

export default {
  title: 'Example/Login',
  component: Login,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Login>;

const LoginTemplate: ComponentStory<typeof Login> = (args) => <Login {...args} />;

export const LoginExample = LoginTemplate.bind({});

LoginExample.args = {};