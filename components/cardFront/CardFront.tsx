import React from "react";
import { Button } from "../button/Button";
import './cardFront.scss';

interface CardProps {
    title?: string;
    subtitle?: string;
    imageUrl?: string;
    description?: string;
    attacks?: any[];
    weaknesses?: any[],
    retreatCost?: any[]
}

class CardFront extends React.Component<CardProps>  {

    render(): React.ReactNode {
        return (
            <div>
                <div className="img">
                    <img src={this.props.imageUrl} alt={this.props.title} />
                </div>
                <div className="title">
                    {this.props.title}
                </div>
                <div className="subtitle">
                    {this.props.subtitle}
                </div>
                <div className="description">
                    <p>{this.props.description}</p>
                </div>
                <div className="button front">
                    <Button primary size="small" onClick={() => onclick('rotateY(180deg)', 'rotateY(0deg)')} label="Details" />
                </div>
            </div>
        );
    }
}

function onclick(rotateFront: string, rotateBack: string) {
    const cardFront: any = document.querySelector('.card-side.front');
    const cardBack: any = document.querySelector('.card-side.back');
    cardFront.style.transform = rotateFront;
    cardBack.style.transform = rotateBack;
}

export default CardFront;