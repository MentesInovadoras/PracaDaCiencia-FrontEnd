import { ReadService } from "@/shared/service/repository/ReadService";
import type { VisitantePessoa } from "../types/VisitantePessoa";
import { WriteService } from "@/shared/service/repository/WriteService";


export class VisitantePessoaReadService extends ReadService<VisitantePessoa>
{
    public constructor()
    {
        super('visitantes_pessoas');
    }
}


export class VisitantePessoaWriteService extends WriteService<VisitantePessoa>
{
    public constructor()
    {
        super('visitantes_pessoas');
    }
}


export const visitantePessoaReadService = new VisitantePessoaReadService();
export const visitantePessoaWriteService = new VisitantePessoaWriteService();

