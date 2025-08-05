import { Box, Typography } from "@mui/material";
import type { ReactNode } from "react";


interface Props
{
    label?: string;
    required?: boolean;
    children?: ReactNode;
    size?: string;
}


const InputWithLabel: React.FC<Props> = ({
    label = "",
    required = false,
    size = "100%",
    children
}) =>
{
    return (
        <Box display={"flex"} flexDirection={"column"} minWidth={size}>
            <Typography variant="body1">{ `${label}${required?'*':''}` }</Typography>
            { children }
        </Box>
    )
}


export default InputWithLabel;

