import type { BaseEntity } from "@/shared/service/types"


export interface VisitanteInstituicao extends BaseEntity
{
    nome_instituicao: string;
    email_instituicao: string;
    telefone_instituicao: string;
    municipio: string;
    nome_responsavel: string;
    tipo_instituicao: string;
    escolaridade: string;
}

