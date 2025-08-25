import type { VisitantePessoa } from "@/modules/visitante/types/VisitantePessoa";
import type { BaseEntity, ID } from "@/shared/service/types";
import type { Guia } from "./Guia";
import type { VisitanteInstituicao } from "@/modules/visitante/types/VisitanteInstituicao";

export interface Visita extends BaseEntity {
  numero_visitantes: number;
  data_visita: Date;
  observacao: string;
  status: string;
}

export interface VisitaRead extends Visita {
  tipo_visitante: string;
  guia: Guia;
  roteiro: Roteiro;
}

export interface VisitaPessoaRead extends VisitaRead {
  visitante: VisitantePessoa;
}

export interface VisitaInstituicaoRead extends VisitaRead {
  visitante: VisitanteInstituicao;
}

export interface VisitaWrite extends Visita {
  guia: ID;
  roteiro: ID;
  visitante: ID;
}
