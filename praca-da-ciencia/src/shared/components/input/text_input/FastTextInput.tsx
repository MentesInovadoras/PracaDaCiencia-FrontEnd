import { TextField, type TextFieldVariants } from "@mui/material";
import InputWithLabel from "../InputWithLabel";
import { useEffect, useState } from "react";
import type { Masker, ValidateFunction } from "../scripts/types";
import { cantBeEmpty } from "../scripts/validators";
import type { WriteService } from "@/shared/service/repository/WriteService";
import type { BaseEntity } from "@/shared/service/types";


interface ConfigureService<T extends BaseEntity>
{
    service: WriteService<T>;
    key: keyof T;
}


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
    size?: string;
    service?: ConfigureService<any>;
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
    size,
    mask,
    service,
}) =>
{
    const [isInvalid, setIsInvalid] = useState(false);
    const [helpperText, setHelpperText] = useState(helpText);
    const [showInfoHint, setShowInfoHint] = useState(false);
    const [value, setValue] = useState(startValue);

    useEffect(
        ()=>
        {
            if(service != undefined)
                { setValue(service.service.entity[service.key]); }
        },
        []
    )


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
        if(service != undefined)
            { service.service.setEntityKey(service.key, obj); }

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
            size={size} 
        >
            <TextField
                error={isInvalid}
                required={required}
                placeholder={placeholder?`Ex. ${placeholder}`:''}
                variant={variant}
                onChange={event=>handleChange(event.target.value)}
                helperText={ (showInfoHint||isInvalid) ? helpperText : ''}
                onClick={()=>setShowInfoHint(true)}
                onBlur={()=>setShowInfoHint(false)}
                value={value}
                sx={{ minWidth: 200 }}
            />
        </InputWithLabel>
    )
}


export default FastTextInput;

