import React from "react";
import './carousel.scss';

interface CarrouselProps {
    children?: any;
    height?: string;
    width?: string;
}

class Carousel extends React.Component<CarrouselProps> {

    render(): React.ReactNode {
        return (
            <div className="carousel" style={{ width: this.props.width, height: this.props.height }}>
                <div>
                    {this.props.children}                    
                </div>
            </div>
        )
    }
}

export default Carousel;