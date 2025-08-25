import type { ReadService } from "@/shared/service/repository/ReadService";
import type { SimpleCrudService } from "@/shared/service/repository/SimpleCrudServie";
import type { BaseEntity } from "@/shared/service/types";
import { DataGrid, type GridColDef, type GridRenderCellParams, type GridValidRowModel } from "@mui/x-data-grid";
import { useEffect, useState, type ReactNode } from "react";


export interface ColumnData<T extends GridValidRowModel, K extends keyof T = keyof T>
{
    field: (K | 'actions');
    headerName: string;
    valueFormatter?: (value: (T[K] | undefined)) => string;
    renderCell?: (params: GridRenderCellParams<T>) => ReactNode;
    flex?: number;
    width?: number;
}


interface Props<T extends BaseEntity>
{
    service: ReadService<T> | SimpleCrudService<T>;
    columns: ColumnData<T>[];
}


const CrudTable = <T extends BaseEntity>({ service, columns }: Props<T>) =>
{
    const [rows, setRows] = useState<T[]>([]);

    useEffect(
        ()=>{
            service.list().then(setRows);
        },
        []
    )

    return (
    <DataGrid
        columns={ columns as GridColDef[] }
        rows={rows}
    />
)
}


export default CrudTable;

