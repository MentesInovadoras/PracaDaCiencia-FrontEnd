import { Autocomplete, IconButton, TextField, Typography, type AutocompleteRenderInputParams } from "@mui/material";
import type { Guia } from "../types/Guia";
import SaveIcon from "@mui/icons-material/Save";
import { useState } from "react";
import { emptyEntity } from "@/shared/utils/BaseEntityManipulation";



export interface Props
{
    guiaList: Guia[];
    defaultGuia?: Guia;
    onClick?: (guia: Guia) => void;
}


const GuiaList: React.FC<Props> = ({ guiaList, defaultGuia, onClick }) =>
{
    const [actualGuia, setActualGuia] = useState(emptyEntity<Guia>());

    function getAutocompleteLabel(option: Guia)
    {
        return option.nome;
    }

    function getRenderInput(params: AutocompleteRenderInputParams)
    {
        return <TextField {...params} label="Selecione um Guia" />
    }

    function handlleOnChange(value?: Guia | null)
    {
        if(value)
            { setActualGuia(value); }
        else
            { setActualGuia(emptyEntity<Guia>()); }
    }

    function handlleOnClick()
    {
        if(onClick)
            { onClick(actualGuia); }
    }


    return(
        <>
            <Typography>Guia</Typography>
            <Autocomplete
            options={guiaList}
            getOptionLabel={getAutocompleteLabel}
            renderInput={getRenderInput}
            defaultValue={defaultGuia}
            onChange={(_, value) => handlleOnChange(value)}
            />
            <IconButton onClick={_ => handlleOnClick()} >
                <SaveIcon />
            </IconButton>
        </>
    )
}


export default GuiaList;

