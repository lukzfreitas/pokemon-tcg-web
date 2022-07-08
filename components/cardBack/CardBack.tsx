import React from "react"
import { Button } from "../button/Button";
import './cardBack.scss';

interface CardProps {
    title?: string;
    subtitle?: string;
    imageUrl?: string;
    description?: string;
    attacks?: any[];
    weaknesses?: any[],
    retreatCost?: any[]
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

export default CardBack