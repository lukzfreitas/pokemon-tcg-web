import React from "react";
import { Button } from "./Button";
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

export class Card extends React.Component<CardProps> {

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

class CardFront extends React.Component<CardProps>  {

    render(): React.ReactNode {
        return (
            <div className="content">
                <div>
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

class CardBack extends React.Component<CardProps> {
    
    render(): React.ReactNode {
        return (
            <div className="content">
                <div className="title">Attacks</div>
                {this.props.attacks?.map(attack => {
                    return (
                        <div className="detail">
                            {attack}
                            <hr></hr>
                        </div>
                    )
                })}
                <div className="title">Weaknesses</div>
                {this.props.weaknesses?.map(weakness => {
                    return (
                        <div className="detail">
                            {weakness}
                            <hr></hr>
                        </div>
                    )
                })}
                <div className="title">Retreat Cost</div>
                {this.props.retreatCost?.map(cost => {
                    return (
                        <div className="detail">
                            {cost}
                            <hr></hr>
                        </div>
                    )
                })}
                <div className="button back">
                    <Button primary size="small" onClick={() => onclick('rotateY(360deg)', 'rotateY(180deg)')} label='Back' />
                </div>
            </div>
        )
    }
}

function onclick(rotateFront: string, rotateBack: string) {
    const cardFront: any = document.querySelector('.card-side.front');
    const cardBack: any = document.querySelector('.card-side.back');
    cardFront.style.transform = rotateFront;
    cardBack.style.transform = rotateBack;
}