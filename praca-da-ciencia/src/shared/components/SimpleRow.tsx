import { Box, Divider, Typography } from "@mui/material";
import type { ReactNode } from "react"


interface Props
{
    title?: string;
    divider?: boolean;
    children: ReactNode;
}


const SimpleRow: React.FC<Props> = ({ title, divider=false, children }) =>
{
    return (
        <>
            <Box display="flex" flexDirection="column">
                { title ? <Typography variant="h5" color="text.secondary"> { title } </Typography> : <></> }
                <Box display="flex" flexDirection="row" gap={2} flexWrap={"wrap"} flex={1} width="100%">
                    { children }
                </Box>
            </Box>
            { divider ? <Divider /> : <></> }
        </>
    )
}


export default SimpleRow;

