import React from "react";
import CardBack from "../cardBack/CardBack";
import CardFront from "../cardFront/CardFront";
import './card.scss';

interface CardProps {
    title?: string;
    subtitle?: string;
    imageUrl?: string;
    description?: string;
    attacks?: any[];
    weaknesses?: any[],
    retreatCost?: any[]
}

class Card extends React.Component<CardProps> {

    render(): React.ReactNode {
        return (
            <div className="card">
                <div className="card-side front">
                    <CardFront
                        title={this.props.title}
                        subtitle={this.props.subtitle}
                        imageUrl={this.props.imageUrl}
                        description={this.props.description}
                    />
                </div>
                <div className="card-side back">
                    <CardBack
                        attacks={this.props.attacks}
                        weaknesses={this.props.weaknesses}
                        retreatCost={this.props.retreatCost}
                    />
                </div>
            </div>
        );
    }
}

export default Card;