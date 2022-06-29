import React from "react";
import './card.css';

interface CardProps {
    name?: string;
    imageUrl?: string;
    description?: string;
}

export const Card = ({ name, imageUrl, description }: CardProps) => {
    return (
        <main className="card">
            <div className="title">
                <h1>{name}</h1>
            </div>
            <div>
                <img
                    src={imageUrl}
                    alt={name}
                />
            </div>
            <div className="container">
                <p>{description}</p>
            </div>
        </main>
    );
};
