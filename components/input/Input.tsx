import React, { useEffect, useState } from "react";
import './input.scss';

export interface InputProps {
    value: string;
    type: string;
    height: string;
    width: string;
    isError: boolean;
    messageError: string;
    onChangeValue: Function;
    onKeyPress: Function;
    onKeyDown: Function;
}

export function Input(props: InputProps) {

    const [value, setValue] = useState(props.value);

    const [isError, setError] = useState(props.isError);

    const [messageError, setMessageError] = useState(props.messageError);

    useEffect(() => {
        setError(props.isError);
        setMessageError(props.messageError);
    })

    const handleChangeValue = (event: any) => {
        setValue(event.target.value);
        props.onChangeValue(value);
    };

    const handleKeyPress = (event: any) => {
        props.onKeyPress(event);
    }

    const handleKeyDown = (event: any) => {
        props.onKeyDown(event);
    }

    return (
        <div className="container">
            <input
                value={value}
                type={props.type}
                style={{ height: props.height, width: props.width }}
                className={isError ? 'input error' : 'input sucess'}
                onChange={e => handleChangeValue(e)}
                onKeyPress={e => handleKeyPress(e)}
                onKeyDown={e => handleKeyDown(e)}
            />
            <MessageError></MessageError>
        </div>
    );

    function MessageError() {
        return isError ? <span className="message-error">{messageError}</span> : null;
    }
}



