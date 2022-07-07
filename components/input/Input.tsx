import { useEffect, useState } from "react";
import './input.scss';

export interface InputProps {
    value: string;
    placeholder: string;
    disabled: boolean;
    type: string;
    maxLength: number;
    minLength: number;
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

    const [placeholder, setPlaceholder] = useState(props.placeholder);

    const [disabled, setDisabled] = useState(props.disabled);

    const [maxLength, setMaxLength] = useState(props.maxLength);

    const [minLength, setMinLength] = useState(props.minLength);

    useEffect(() => {
        setValue(props.value);
        setPlaceholder(props.placeholder);
        setDisabled(props.disabled);
        setError(props.isError);
        setMessageError(props.messageError);
        setMaxLength(props.maxLength);
        setMinLength(props.minLength);
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
                placeholder={placeholder}
                disabled={disabled}
                maxLength={maxLength}
                minLength={minLength}
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



