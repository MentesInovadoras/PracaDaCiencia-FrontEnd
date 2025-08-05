import { maskCPF, removeMaskCPF } from "../scripts/maskers";
import type { FastSpecificTextInputProps } from "../scripts/types";
import { validateCPF } from "../scripts/validators";
import FastTextInput from "./FastTextInput";


const FastCPFInput: React.FC<FastSpecificTextInputProps> = ({ required=true, onChange, startValue, variant, size }) =>
{
    return (
        <FastTextInput
            required={required}
            label="CPF"
            placeholder="12345678910"
            helpText="Informe somente os números de seu Cadastro de Pessoa Física (CPF)"
            mask={{add: maskCPF, remove: removeMaskCPF}}
            validators={[validateCPF]}
            onChange={onChange}
            startValue={startValue}
            variant={variant}
            size={size}
        />
    )
}


export default FastCPFInput;

