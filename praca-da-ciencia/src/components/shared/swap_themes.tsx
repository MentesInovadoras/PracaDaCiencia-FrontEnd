import { Grid, IconButton } from "@mui/material";
import Icon from "@mui/material/Icon";

interface SwapThemesProps
{
    onClick: () => void;
}


const SwapThemes: React.FC<SwapThemesProps> = ({ onClick }) =>
{
    return (
        <>
            <Grid size={12} alignItems={"end"}>
                <IconButton onClick={onClick}>
                    {/* TODO: atualizar isso para exibir um solzinho */}
                    <Icon> sunny </Icon>
                </IconButton>
            </Grid>
        </>
    )
}


export default SwapThemes;

