import { ID } from "./BaseTypes";


export enum AcetableMethods
{
    GET,
    POST,
    PATCH,
    UPDATE,
    DELETE,
}


abstract class BaseEntity
{
    private id: ID;

    public constructor(id: ID)
    {
        this.id = id;
    }

    public abstract toPost(): BaseDTO;
}

export abstract class BaseDTO
{
    private readonly id: ID;
    private readonly method: AcetableMethods;

    public constructor(id: ID, method: AcetableMethods)
    {
        this.id = id;
        this.method = method;
    }
}


export default BaseEntity;