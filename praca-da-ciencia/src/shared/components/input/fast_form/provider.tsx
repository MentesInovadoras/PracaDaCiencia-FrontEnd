import { useServiceContext } from "@/shared/context/ServiceContext";
import type { WriteService } from "@/shared/service/repository/WriteService";
import { Box, Button, Card, CardActions, CardContent, CardHeader, Typography } from "@mui/material";
import { useEffect, type ReactNode } from "react";


export type EnumFormSubmmitTypes = "full_save" | "economic_save";


export interface Props
{
    id?: string;
    title?: string;
    onSubmit?: () => void;
    submitButtonTitle?: string;
    cancelButtonTitle?: string;
    onClickCancel?: () => void;
    submitType?: EnumFormSubmmitTypes;

    service: WriteService<any>;
    children: ReactNode;
}


const Provider: React.FC<Props> = ({ onSubmit, title, submitButtonTitle, cancelButtonTitle, onClickCancel, id="form", submitType = "economic_save", service, children }) =>
{
    const serviceContext = useServiceContext();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>
    {
        e.preventDefault();
        if(onSubmit)
            { onSubmit(); }

        if(submitType === "economic_save")
            { serviceContext.service?.economicSave(); }
        else if(submitType === "full_save")
            { serviceContext.service?.fullSave(); }
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

    useEffect(()=>{serviceContext.setService(service)}, []);

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
                        {
                            serviceContext.service ? children: <Typography color="primary" variant="h4">Cargando Dados, aguarde...</Typography>
                        }
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


export default Provider;

