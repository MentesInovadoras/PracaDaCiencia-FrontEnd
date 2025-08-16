import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import type { GridColDef } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";

/* TODO: Falta o redirecionamento para uma página dedicada */

export interface Data {
  id: number; //Obrigatório para usar DataGrid
  dateTime?: Date | null;
  responsavel?: string;
  instituicao?: string;
  guide?: string;
}

export interface Props {
  data?: Data[];
  height?: string;
  width?: string;
}

const rows: Data[] = [
  {
    id: -1,
    dateTime: new Date("9999-12-31T24:00:00"),
    responsavel: "undefined",
    instituicao: "undefined",
    guide: "undefined",
  },
];

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "dateTime",
    headerName: "Data/Hora",
    width: 180,
    valueFormatter: (value) => {
      if (!value) return "";
      const date = new Date(value);
      return date.toLocaleString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    },
  },
  { field: "responsavel", headerName: "Responsável", width: 180 },
  { field: "instituicao", headerName: "Instituição", width: 180 },
  { field: "guide", headerName: "Guia", width: 180 },
];

const paginationModel = { page: 0, pageSize: 5 };

export default function DataTable({
  data = rows,
  height = "400px",
  width = "100%",
}: Props) {
  const navigate = useNavigate();

  const handlerRowClick = (params: any) => {
    const id = params.row.id;
    navigate(`/gestao/forms/${id}`);
  };

  return (
    <Paper sx={{ height: height, width: width }}>
      <DataGrid
        onRowClick={handlerRowClick}
        rows={data}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        sx={{ border: 0 }}
      />
    </Paper>
  );
}
