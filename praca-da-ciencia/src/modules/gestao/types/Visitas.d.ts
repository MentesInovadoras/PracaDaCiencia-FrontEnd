import type { BaseEntity, ID } from "../../../shared/service/types";
import type { Guia } from "./Guia";

export interface Visita extends BaseEntity {
  nome_visitante: string,
  CEP_visitante: string,
  email_visitante: string,
  telefone_visitante: string,
  numero_visitantes: number,
  tipo_visita: string,
  data_visita: Date,
  observacao: string,
  status: string,
}

export interface VisitaRead extends Visita {
  guia: Guia
}

export interface VisitaWrite extends Visita {
  guia: ID
}