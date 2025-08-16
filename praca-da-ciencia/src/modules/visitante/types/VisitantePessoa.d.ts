import type { BaseEntity } from "@/shared/service/types";


export interface VisitantePessoa extends BaseEntity
{
    nome: string;
    email: string;
    telefone: string;
    cep: string;
}

