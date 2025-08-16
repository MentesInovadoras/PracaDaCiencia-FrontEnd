import type { BaseEntity } from "@/shared/service/types";


export interface Roteiro extends BaseEntity
{
    nome: string;
    ensino: boolean;
    ativo: boolean;
}

