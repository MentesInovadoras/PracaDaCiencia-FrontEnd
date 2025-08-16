import { ReadService } from "@/shared/service/repository/ReadService";
import type { VisitaInstituicaoRead, VisitaPessoaRead, VisitaWrite } from "../types/Visitas";
import { isVisitaInstituicaoRead, isVisitaPessoaRead } from "../utils/TypesCheckers";
import { WriteService } from "@/shared/service/repository/WriteService";


export class VisitaReadService extends ReadService<VisitaPessoaRead | VisitaInstituicaoRead>
{
    public constructor()
    {
        super("visitas");
    }

    public filter_instituicoes(objs: (VisitaPessoaRead|VisitaInstituicaoRead)[]): VisitaInstituicaoRead[]
    {
        return objs.filter(isVisitaInstituicaoRead);
    }

    public filter_pessoas(objs: (VisitaPessoaRead|VisitaInstituicaoRead)[]): VisitaPessoaRead[]
    {
        return objs.filter(isVisitaPessoaRead);
    }
}


export class VisitaWriteService extends WriteService<(VisitaPessoaRead | VisitaInstituicaoRead), VisitaWrite>
{
    public constructor()
    {
        super("visitas");
    }
}


export const visitaReadService = new VisitaReadService();
export const visitaWriteService = new VisitaWriteService();


