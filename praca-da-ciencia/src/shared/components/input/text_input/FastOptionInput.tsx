import type { FastSpecificTextInputProps } from "../scripts/types";
import FastTextInput from "./FastTextInput";


const FastOptionInput: React.FC<FastSpecificTextInputProps> = ({ required=false, onChange, startValue, variant, serviceKey }) =>
{
    return (
        <FastTextInput
            label="Observação"
            helpText="Campo de texto livre"
            required={required}
            onChange={onChange}
            startValue={startValue}
            variant={variant}
            serviceKey={serviceKey}
        />
    )
}


export default FastOptionInput;

