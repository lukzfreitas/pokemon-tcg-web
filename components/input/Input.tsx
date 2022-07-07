import { useEffect, useState } from "react";
import './input.scss';

export interface InputProps {
    value?: string;
    type?: string;
    placeholder?: string;
    disabled?: boolean;
    maxLength?: number;
    minLength?: number;
    height?: string;
    width?: string;
    isError?: boolean;
    messageError?: string;
    onChangeValue?: Function;
    onKeyPress?: Function;
    onKeyDown?: Function;
}

const Input = ({
    type = 'text',
    height = '20px',
    width = '100%',
    isError = false,
    onChangeValue = () => {},
    onKeyPress = () => {},
    onKeyDown = () => {},
    ...props }: InputProps) => {

    const [value, setValue] = useState(props.value);

    const [isErrorState, setError] = useState(isError);

    const [messageError, setMessageError] = useState(props.messageError);

    const [placeholder, setPlaceholder] = useState(props.placeholder);

    const [disabled, setDisabled] = useState(props.disabled);

    const [maxLength, setMaxLength] = useState(props.maxLength);

    const [minLength, setMinLength] = useState(props.minLength);

    useEffect(() => {
        setValue(props.value);
        setPlaceholder(props.placeholder);
        setDisabled(props.disabled);
        setError(isErrorState);
        setMessageError(props.messageError);
        setMaxLength(props.maxLength);
        setMinLength(props.minLength);
    })

    const handleChangeValue = (event: any) => {
        setValue(event.target.value);
        onChangeValue(value);
    };

    const handleKeyPress = (event: any) => {
        onKeyPress(event);
    }

    const handleKeyDown = (event: any) => {
        onKeyDown(event);
    }

    return (
        <div className="container">
            <input
                value={value}
                placeholder={placeholder}
                disabled={disabled}
                maxLength={maxLength}
                minLength={minLength}
                type={type}
                style={{ height: height, width: width }}
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

export default Input;

