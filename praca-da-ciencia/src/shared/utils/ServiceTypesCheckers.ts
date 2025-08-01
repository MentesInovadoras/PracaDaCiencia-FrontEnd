import type { BaseEntity, ID } from "../service/types";


/**
 * @summary Verifica se x é do tipo ID.
 * @param x objeto que deseja-se verificar
 * @returns verdadeiro se x for do tipo ID, falso caso contrário.
 */
export function isId(x: any): x is ID
{
    if(x == undefined || x == null)
        { return false; }

    return ( 
        (
            typeof(x) === "string" &&
            !Number.isNaN(x) &&
            Number.parseInt(x) >= 0
        )
        ||
        (
            typeof(x) === "number" &&
            x >= 0
        )
    )
}


/**
 * @summary Verifica se x é do tipo BaseEntity
 * @param x objeto que deseja-se verificar
 * @returns verdadeiro se for do tipo BaseEntity, falso caso contrário
 */
export function isBaseEntity(x: any): x is BaseEntity
{
    if(x == undefined || x == null)
        { return false; }

    return isId(x.id);
}


/**
 * @summary Verifica se x é um array de BaseEntity (BaseEntity[])
 * @param x objeto que deseja-se verificar
 * @returns verdadeiro se for um array de BaseEntity, falso caso contrário
 */
export function isBaseEntityArray(x: any): x is BaseEntity[]
{
    if(!Array.isArray(x))
        { return false; }

    return x.every(obj => isBaseEntity(obj));
}

