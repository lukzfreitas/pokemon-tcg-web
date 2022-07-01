import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Card } from '../components/Card';

export default {
  title: 'Example/Card',
  component: Card,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Pikachu = Template.bind({});
Pikachu.args = {
  title: 'Pikachu',
  subtitle: 'Thunder',
  imageUrl: 'https://images.pokemontcg.io/dp2/94_hires.png',
  description: "Once during your turn (before your attack), if Pichu is anywhere under Pikachu, you may search your discard pile for a Lightning Energy card, show it to your opponent, and put it into your hand. This power can't be used if Pikachu is affected by a Special Condition.",
  button1: { title: 'Details' },
  button2: { title: 'Prev' },
  button3: { title: 'Next' }
};