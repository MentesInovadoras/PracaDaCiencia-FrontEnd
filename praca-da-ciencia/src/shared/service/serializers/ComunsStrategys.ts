import { baseEntityToIdArray } from "../../utils/BaseEntityManipulation";
import { isBaseEntity, isBaseEntityArray } from "../../utils/ServiceTypesCheckers";
import type { BaseEntity } from "../types";
import type { ISeralizerStrategy } from "./ISerializerStrategy";


interface GenericType
{
    [key: string]: any;
}


/**
 * @description Serializador com estratégia para simplesmente mascarar os tipos passados
 * @class 
 */
export class MaskSerializerStrategy<T, R> implements ISeralizerStrategy<T, R>
{
    public constructor()
    {

    }


    public serialize(obj: T): R
    {
        return obj as unknown as R;
    }
}


/**
 * @description Estratégia que pega o tipo T e modifica cada tipo agregado dele que seja uma base entity e transforma-os em ids
 */
export class ParseMultiEntityStrategy<T extends BaseEntity, R extends BaseEntity> implements ISeralizerStrategy<T, R>
{
    public constructor()
    {

    }

    public serialize(obj: T): R
    {
        const result: GenericType = {};
        Object.assign(result, obj);

        for(const key in obj)
        {
            if(isBaseEntity(result[key]))
                { result[key] = result[key].id; }
            if(isBaseEntityArray(result[key]))
                { result[key] = baseEntityToIdArray(result[key]); }
        }        

        return result as R;
    }
} 

