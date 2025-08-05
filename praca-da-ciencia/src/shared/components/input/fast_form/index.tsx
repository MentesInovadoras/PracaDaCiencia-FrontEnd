import { Box, Button, Card, CardActions, CardContent, CardHeader } from "@mui/material";
import type { ReactNode } from "react";


export interface Props
{
    id?: string;
    title?: string;
    onSubmit: () => void;
    submitButtonTitle?: string;
    cancelButtonTitle?: string;
    onClickCancel?: () => void;

    children: ReactNode;
}


const FastForm: React.FC<Props> = ({ onSubmit, title, submitButtonTitle, cancelButtonTitle, onClickCancel, id="form", children }) =>
{
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>
    {
        e.preventDefault();
        onSubmit();
    }

    const submitButtonBuilder = () =>
    {
        if(submitButtonTitle == undefined)
            { return <></>; }

        return <Button color="success" type="submit" form={id}> {submitButtonTitle} </Button>;
    }

    const cancelButtonBuilder = () =>
    {
        if(cancelButtonTitle == undefined)
            { return <></>; }

        return <Button color="warning" onClick={onClickCancel}> {cancelButtonTitle} </Button>
    }

    return (
        <Card>
            <CardHeader title={title}/>
            <CardContent>
                <form onSubmit={handleSubmit} id={id}>
                    <Box
                        display={"flex"}
                        flexDirection={"column"}
                        gap={4}
                    >
                        { children }
                    </Box>
                </form>
            </CardContent>
            <CardActions>
                { submitButtonBuilder() }
                { cancelButtonBuilder() }
            </CardActions>
        </Card>
    )
}


export default FastForm;

