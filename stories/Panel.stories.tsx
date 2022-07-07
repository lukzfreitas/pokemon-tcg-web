import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';


import { Panel } from '../components/panel/Panel';

export default {
  title: 'Example/Panel',
  component: Panel,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Panel>;

const PanelTemplate: ComponentStory<typeof Panel> = (args) => <Panel {...args} />;

export const PanelExample = PanelTemplate.bind({});

PanelExample.args = {  
  height: '400px',
  width: '400px',  
};

