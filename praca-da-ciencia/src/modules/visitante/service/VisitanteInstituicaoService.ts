import { ReadService } from "@/shared/service/repository/ReadService";
import type { VisitanteInstituicao } from "../types/VisitanteInstituicao";
import { WriteService } from "@/shared/service/repository/WriteService";


export class VisitanteInstituicaoReadService extends ReadService<VisitanteInstituicao>
{
    public constructor()
    {
        super("visitantes_unidade");
    }
}


export class VisitanteInstituicaoWriteService extends WriteService<VisitanteInstituicao>
{
    public constructor()
    {
        super("visitantes_unidade");
    }
}


export const visitanteInstituicaoReadService = new VisitanteInstituicaoReadService();
export const visitanteInstituicaoWriteService = new VisitanteInstituicaoWriteService();

