import type { BaseEntity, ID } from "@/shared/service/types";


export type VisitaTipoEnum = "Pessoa Física" | "Pessoa Jurídica";
export type VisitaStatusEnum = "Agendado" | "Expirado" | "Cancelada" | "Realizado";


export interface Visita extends BaseEntity
{
  nome_visitante: string;
  CEP_visitante: string;
  email_visitante: string;
  telefone_visitante: string;
  numero_visitantes: number;
  tipo_visita: VisitaTipoEnum;
  data_visita: Date;
  observacao: string;
  status: VisitaStatusEnum;
}


export interface VisitaRead extends Visita
{
    guia: { id: ID, nome: string };
}


export interface VisitaWrite extends Visita
{
    guia: ID;
}

