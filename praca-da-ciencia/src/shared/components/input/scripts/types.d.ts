import type { TextFieldVariants } from "@mui/material";


export interface FastSpecificTextInputProps
{
    required?: boolean;
    onChange?: (str: string) => void;
    startValue?: string;
    variant?: TextFieldVariants;
    size?: string;
}


export interface ValidateFunction
{
    /**
     * @param obj valor contido no campo
     * @returns
     *  boolean -> true caso seja válido
     *  string -> em caso de erro, envie uma string 
     */
    (obj: string): boolean | string
}

/**
 * @description Interface que lista duas funções, uma para aplicar máscaras e outra para remover máscaras
 */
export interface Masker
{
    add: (obj: string) => string;
    remove: (obj: string) => string;
}

