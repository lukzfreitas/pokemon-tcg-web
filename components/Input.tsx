import React, { useState } from "react";


export interface InputProps {
    value: string;
    type: string;
}

export class Input extends React.Component<InputProps> {    

    render(): React.ReactNode {       
        return (
            <div>
                <input type={this.props.type} value={this.props.value} />                
            </div>

        );
    }
}

