import { TextField, type TextFieldVariants } from "@mui/material";
import InputWithLabel from "../InputWithLabel";
import { useState } from "react";
import type { Masker, ValidateFunction } from "../scripts/types";
import { cantBeEmpty } from "../scripts/validators";


interface Props
{
    label?: string;
    placeholder?: string;
    required?: boolean;
    variant?: TextFieldVariants;
    onChange?: (obj: string) => void;
    validators?: ValidateFunction[];
    helpText?: string;
    startValue?: string;
    mask?: Masker;
}


const FastTextInput: React.FC<Props> = ({
    label = "",
    placeholder,
    required = false,
    variant="filled",
    onChange,
    validators = [],
    helpText,
    startValue="",
    mask,
}) =>
{
    const [isInvalid, setIsInvalid] = useState(false);
    const [helpperText, setHelpperText] = useState(helpText);
    const [showInfoHint, setShowInfoHint] = useState(false);
    const [value, setValue] = useState(startValue);


    const checkValidation = (func: ValidateFunction, obj: string): boolean =>
    {
        const result = func(obj);
        if(typeof(result) == "string")
        {
            setHelpperText(result);
            setIsInvalid(true);
            return false;
        }   

        return true;
    }

    const handleChange = (obj: string) =>
    {
        if(onChange)
            { onChange(obj); }
        setValue(mask?.add(obj)??obj); 

        const nonMaskedObject = mask?.remove(obj)??obj;
        if(required && !checkValidation(cantBeEmpty, nonMaskedObject))
            { return; }
        if(validators.every(func=>checkValidation(func, nonMaskedObject)))
            { setIsInvalid(false); setHelpperText(helpText); }
    }

    return (
        <InputWithLabel
            label={label}
            required={required}
        >
            <TextField
                error={isInvalid}
                required={required}
                placeholder={`Ex. ${placeholder}`}
                variant={variant}
                onChange={event=>handleChange(event.target.value)}
                helperText={ (showInfoHint||isInvalid) ? helpperText : ''}
                onClick={()=>setShowInfoHint(true)}
                onBlur={()=>setShowInfoHint(false)}
                value={value}
            />
        </InputWithLabel>
    )
}


export default FastTextInput;

