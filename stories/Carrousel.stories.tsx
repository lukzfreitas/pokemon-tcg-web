import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Carousel from '../components/carousel/Carousel';
import Card from '../components/card/Card';

export default {
  title: 'Example/Carrousel',
  component: Carousel,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Carousel>;

const CarouselTemplate: ComponentStory<typeof Carousel> = (args) => <Carousel {...args} />;

export const CarouselExample = CarouselTemplate.bind({});
CarouselExample.args = {
  children: <Card title='Pikachu'
    subtitle='Thunder'
    imageUrl='https://images.pokemontcg.io/dp2/94_hires.png'
    description="Once during your turn (before your attack), if Pichu is anywhere under Pikachu, you may search your discard pile for a Lightning Energy card, show it to your opponent, and put it into your hand. This power can't be used if Pikachu is affected by a Special Condition."
    attacks={['Growl', 'Thundershock']}
    weaknesses={['Fighting']}
    retreatCost={['Colorless']} />,    
  height: '800px',
  width: '400px'  
};