import BaseEntity from "../../dtos/BaseEntity";

abstract class AbstractService<Entity extends BaseEntity>
{
    private url: string;

    public constructor(url: string)
    {
        this.url = url;
    }

    public async post(entity: Entity): Promise<Entity>
    {
        /* Faz algo com o entity.toPost() */
        entity.toPost();

        return entity;
    }
}


export default AbstractService;

export type GenericAbstractService = AbstractService<BaseEntity>;