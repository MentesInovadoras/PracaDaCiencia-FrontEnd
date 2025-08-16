import roteiroService from "@/modules/gestao/service/RoteiroService";
import type { Roteiro } from "@/modules/gestao/types/Roteiro";
import CrudTable, { type ColumnData } from "@/shared/components/table/CrudTable";
import { Button, IconButton } from "@mui/material";
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import FastForm from "@/shared/components/input/fast_form";
import FastTextInput from "@/shared/components/input/text_input/FastTextInput";

const ListarRoteiros: React.FC = () =>
{

    const roteiroTableColumns: ColumnData<Roteiro>[] = [
        {
            field: 'nome',
            headerName: 'Roteiro',
            width: 250,
        },
        {
            field: 'ativo',
            headerName: 'Ativo',
        },
        {
            field: 'ensino',
            headerName: 'Ensino',
        },
        {
            field: 'actions',
            headerName: "Ações",
            width: 180,
            renderCell: (params) =>
            {
                return (
                    <>
                        <IconButton> <CreateIcon color="info" /> </IconButton>
                        <IconButton> <DeleteIcon color="error" /> </IconButton>
                    </>
                )
            },
        }
    ]


    return(
        <>
            <Button color="primary" variant="contained">Adicionar Roteiro</Button>

            <FastForm
                service={roteiroService}
            >
                <FastTextInput serviceKey="id" />
            </FastForm>

            <CrudTable
                service={roteiroService}
                columns={roteiroTableColumns}
            />
        </>
    )
}


export default ListarRoteiros;

