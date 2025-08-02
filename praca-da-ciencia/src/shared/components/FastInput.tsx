import { TextField, Typography } from "@mui/material";
import type { ReactNode } from "react";


interface Props
{
    label?: string;
    placeholder?: string;
    required?: boolean;
    children?: ReactNode;
}


const FastInput: React.FC<Props> = ({
    label = "",
    placeholder = "",
    required = false,
    children
}) =>
{
    return (
        <>
            <Typography variant="h4">{ label }</Typography>
            { children }
        </>
    )
}


export default FastInput;

