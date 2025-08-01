import type { BaseEntity, ID } from "../service/types";


/**
 * @summary Pega um array de BaseEntity e o transforma em um array de IDs. Útil para serializar um Reader em um Writer
 * @param entities array de entidades que deseja-se manipular
 * @returns array de IDs com os ids das entidades
 */
export function baseEntityToIdArray(entities: BaseEntity[]): ID[]
{
    return entities.map(entity => entity.id);
}


/**
 * @summary Permite manipular um parâmetro/argumento específico da entidade sem alterar o resto das informações
 * @param entity entidade que deseja-se alterar o atributo
 * @param key chave que contém o dado a ser editado
 * @param newValue novo valor a ser atribuído
 */
export function editSomeKey<T extends BaseEntity>(entity: T, key: keyof T, newValue: any)
{
    entity[key] = newValue;
}

