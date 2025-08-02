import { TextField, Typography } from "@mui/material";


interface Props
{
    label?: string;
    placeholder?: string;
    required?: boolean;
}


const FastInput: React.FC<Props> = ({
    label = "",
    placeholder = "",
    required = false,
}) =>
{
    return (
        <>
            <Typography variant="h4">{ label }</Typography>
            <TextField
        </>
    )
}


export default FastInput;

