import { ReadService } from "@/shared/service/repository/ReadService";
import type {
  VisitaInstituicaoRead,
  VisitaPessoaRead,
  VisitaWrite,
} from "../types/Visitas";
import {
  isVisitaInstituicaoRead,
  isVisitaPessoaRead,
} from "../utils/TypesCheckers";
import { WriteService } from "@/shared/service/repository/WriteService";
import type { ISeralizerStrategy } from "@/shared/service/serializers/ISerializerStrategy";

export class VisitaReadService extends ReadService<
  VisitaPessoaRead | VisitaInstituicaoRead
> {
  public constructor() {
    super("visitas");
  }

  public filter_instituicoes(
    objs: (VisitaPessoaRead | VisitaInstituicaoRead)[]
  ): VisitaInstituicaoRead[] {
    return objs.filter(isVisitaInstituicaoRead);
  }

  public filter_pessoas(
    objs: (VisitaPessoaRead | VisitaInstituicaoRead)[]
  ): VisitaPessoaRead[] {
    return objs.filter(isVisitaPessoaRead);
  }
}

export class VisitaWriteSerializer
  implements
    ISeralizerStrategy<VisitaPessoaRead | VisitaInstituicaoRead, VisitaWrite>
{
  public serialize(obj: VisitaPessoaRead | VisitaInstituicaoRead): VisitaWrite {
    const data: VisitaWrite = { ...obj } as unknown as VisitaWrite;

    data.guia = obj.guia.id;
    data.roteiro = obj.roteiro.id;
    data.visitante = obj.visitante.id;

    return data;
  }
}

export class VisitaWriteService extends WriteService<
  VisitaPessoaRead | VisitaInstituicaoRead,
  VisitaWrite
> {
  public constructor() {
    super("visitas");
    this.setSerializeStrategy(new VisitaWriteSerializer());
  }
}

export const visitaReadService = new VisitaReadService();
export const visitaWriteService = new VisitaWriteService();
