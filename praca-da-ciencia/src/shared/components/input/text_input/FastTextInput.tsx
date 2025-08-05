import { TextField, type TextFieldVariants } from "@mui/material";
import InputWithLabel from "../InputWithLabel";
import { useEffect, useState } from "react";
import type { Masker, ValidateFunction } from "../scripts/types";
import { cantBeEmpty } from "../scripts/validators";
import { useServiceContext } from "@/shared/context/ServiceContext";


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
    serviceKey?: keyof any;
}


const FastTextInput: React.FC<Props> = ({
    label,
    placeholder,
    required = false,
    variant="filled",
    onChange,
    validators = [],
    helpText="",
    startValue,
    size,
    mask,
    serviceKey,
}) =>
{
    const [isInvalid, setIsInvalid] = useState(false);
    const [helpperText, setHelpperText] = useState(helpText);
    const [showInfoHint, setShowInfoHint] = useState(false);
    const [value, setValue] = useState(mask == undefined ? (startValue??"") : startValue==undefined ? "" : mask.add(startValue));
    const service = useServiceContext();

    useEffect(
        ()=>
        {
            if(service.service != undefined && serviceKey != undefined)
            {
                const keyValue = service.service.entity[serviceKey];
                if(keyValue != undefined)
                {
                    mask == undefined ? setValue(keyValue) : setValue(mask.add(keyValue));
                }
            }
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
        if(onChange != undefined)
            { onChange(obj); }
        if(service.service != undefined && serviceKey != undefined)
            { service.service.setEntityKey(serviceKey, obj); }

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

