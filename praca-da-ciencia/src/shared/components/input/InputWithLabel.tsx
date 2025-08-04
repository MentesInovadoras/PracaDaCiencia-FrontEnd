import { Box, Typography } from "@mui/material";
import type { ReactNode } from "react";


interface Props
{
    label?: string;
    required?: boolean;
    children?: ReactNode;
}


const InputWithLabel: React.FC<Props> = ({
    label = "",
    required = false,
    children
}) =>
{
    return (
        <Box display={"flex"} flexDirection={"column"}>
            <Typography variant="body1">{ `${label}${required?'*':''}` }</Typography>
            { children }
        </Box>
    )
}


export default InputWithLabel;

