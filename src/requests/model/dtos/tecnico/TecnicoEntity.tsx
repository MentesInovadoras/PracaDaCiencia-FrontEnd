import BaseEntity, { AcetableMethods, BaseDTO } from "../BaseEntity";
import { ID } from "../BaseTypes";


class TecnicoPostDTO extends BaseDTO
{
    constructor()
    {
        super(0, AcetableMethods.POST);
    }
}



export class TecnicoEntity extends BaseEntity
{
    constructor(id: ID)
    {
        super(id);
    }

    public toPost(): TecnicoPostDTO
    {
        return new TecnicoPostDTO();
    }
}

