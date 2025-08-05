import { Autocomplete, TextField } from "@mui/material";
import InputWithLabel from "../InputWithLabel";
import { useState } from "react";


export interface SimpleComboboxOptions
{
    label?: string,
    value: any,
}

const FastComboBox: React.FC = () =>
{
    const [value, setValue] = useState("");
    const optionsList:SimpleComboboxOptions[] = [{value: "teste"}, {value: "outro teste"}];

    const getOptionLabel = (option: SimpleComboboxOptions|string): string =>
    {
        if(typeof option === "string")
            { return option; }
        return option.label??option.value;
    }

    return (
        <InputWithLabel
            label="Label"
        >
            <Autocomplete
                freeSolo
                clearOnBlur
                value={value}
                selectOnFocus
                handleHomeEndKeys
                options={optionsList}
                getOptionLabel={getOptionLabel}
                renderInput={(params) => <TextField {...params} label="Movie" />}
            />
        </InputWithLabel>
    )
}


export default FastComboBox;

