import { maskTelefone, removeMaskTelefone } from "../scripts/maskers";
import type { FastSpecificTextInputProps } from "../scripts/types";
import { validateTelefone } from "../scripts/validators";
import FastTextInput from "./FastTextInput";


const FastNumberInput: React.FC<FastSpecificTextInputProps> = ({ required=true, onChange, startValue, variant }) =>
{
    return (
        <FastTextInput
            required={required}
            label="Número"
            placeholder="27991295294"
            helpText="Informe somente os números de seu telefone"
            mask={{add: maskTelefone, remove: removeMaskTelefone}}
            validators={[validateTelefone]}
            onChange={onChange}
            startValue={startValue}
            variant={variant}
        />
    )
}


export default FastNumberInput;

