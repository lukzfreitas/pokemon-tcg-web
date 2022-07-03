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


export const Card = ({
    title,
    subtitle,
    imageUrl,
    description,
    attacks,
    weaknesses,
    retreatCost
}: CardProps) => {
    return (
        <div className="card">
            <div className="card-side front">
                <CardFront
                    title={title}
                    subtitle={subtitle}
                    imageUrl={imageUrl}
                    description={description}
                />
            </div>
            <div className="card-side back">
                <CardBack
                    attacks={attacks}
                    weaknesses={weaknesses}
                    retreatCost={retreatCost}
                />
            </div>
        </div>
    );
};


const CardFront = ({ title, subtitle, imageUrl, description }: CardProps) => {
    return (
        <div className="content">
            <div>
                <img src={imageUrl} alt={title} />
            </div>
            <div className="title">
                {title}
            </div>
            <div className="subtitle">
                {subtitle}
            </div>
            <div className="description">
                <p>{description}</p>
            </div>
            <div className="button front">
                <Button primary size="small" onClick={() => onclick()} label="Details" />
            </div>

        </div>
    );

    function onclick() {
        const cardFront: any = document.querySelector('.card-side.front');
        const cardBack: any = document.querySelector('.card-side.back');
        cardFront.style.transform = 'rotateY(180deg)';
        cardBack.style.transform = 'rotateY(0deg)';
    }
}

const CardBack = ({ attacks, weaknesses, retreatCost }: CardProps) => {
    return (
        <div className="content">
            <div className="title">Attacks</div>
            {attacks?.map(attack => {
                return (
                    <div className="detail">
                        {attack}
                        <hr></hr>
                    </div>
                )
            })}
            <div className="title">Weaknesses</div>
            {weaknesses?.map(weakness => {
                return (
                    <div className="detail">
                        {weakness}
                        <hr></hr>
                    </div>
                )
            })}
            <div className="title">Retreat Cost</div>
            {retreatCost?.map(cost => {
                return (
                    <div className="detail">
                        {cost}
                        <hr></hr>
                    </div>
                )
            })}
            <div className="button back">
                <Button primary size="small" onClick={() => onclick()} label='Back' />
            </div>
        </div>
    )

    function onclick() {
        const cardFront: any = document.querySelector('.card-side.front');
        const cardBack: any = document.querySelector('.card-side.back');
        cardFront.style.transform = 'rotateY(360deg)';
        cardBack.style.transform = 'rotateY(180deg)';
    }
}