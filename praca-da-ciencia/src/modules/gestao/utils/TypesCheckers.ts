import type { VisitaInstituicaoRead, VisitaPessoaRead } from "../types/Visitas";


export function isVisitaPessoaRead(x: any): x is VisitaPessoaRead
{
    return x != null && x?.visitante?.cep != undefined;
}


export function isVisitaInstituicaoRead(x: any): x is VisitaInstituicaoRead
{
    return x != null && x?.visitante?.escolaridade != undefined;
}

