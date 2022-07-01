import React from "react";
import { Button } from "./Button";
import './card.scss';

interface CardProps {
    title?: string;
    subtitle?: string;
    imageUrl?: string;
    description?: string;
    button1: { title: string, action?: () => void },
    button2: { title: string, action?: () => void },
    button3: { title: string, action?: () => void },
}

export const Card = ({ title, subtitle, imageUrl, description, button1, button2, button3 }: CardProps) => {
    return (
        <div className="card">
            <div className="card-side front">
                <CardFront
                    title={title}
                    subtitle={subtitle}
                    imageUrl={imageUrl}
                    description={description}
                    button1={button1}
                    button2={button2}
                    button3={button3}
                />
            </div>
            <div className="card-side back">
                <CardBack />
            </div>
        </div>
    );
};


const CardFront = ({ title, subtitle, imageUrl, description, button1, button2, button3 }: CardProps) => {
    return (
        <div>
            <div>
                <img src={imageUrl} alt={title} />
            </div>
            <div className="container">
                <div className="title">
                    {title}
                </div>
                <div className="subtitle">
                    {subtitle}
                </div>
                <div className="description">
                    <p>{description}</p>
                </div>
                <div className="row">
                    <div className="align-start">                        
                        <Button primary size="small" onClick={button1.action} label={button1.title} />
                    </div>
                    <div className="align-end">
                        <Button primary size="small" onClick={button2.action} label={button2.title} />
                        <Button primary size="small" onClick={button3.action} label={button3.title} />
                    </div>
                </div>
            </div>
        </div>
    );
}

const CardBack = ({ }) => {
    return (
        <div>
            <div>teste1</div>
            <div>teste2</div>
            <div>teste3</div>
            <div>teste4</div>
            <div>teste5</div>
            <div>teste6</div>
        </div>
    )
}