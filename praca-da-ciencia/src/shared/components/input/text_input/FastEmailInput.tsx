import type { FastSpecificTextInputProps } from "../scripts/types";
import { validateEmail } from "../scripts/validators";
import FastTextInput from "./FastTextInput";


const FastEmailInput: React.FC<FastSpecificTextInputProps> = ({ required=false, onChange, startValue, variant, size, serviceKey }) =>
{
    return (
        <FastTextInput
            label="email"
            placeholder="exemplo@gmail.com"
            helpText="informe o seu email de contato"
            variant={variant}
            onChange={onChange}
            required={required}
            startValue={startValue}
            validators={[validateEmail]}
            size={size}
            serviceKey={serviceKey}
        />
    )
}


export default FastEmailInput;

