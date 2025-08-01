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


/**
 * Cria uma entidade do tipo T limpa
 * @returns um objeto vazio do tipo
 */
export function emptyEntity<T extends BaseEntity>(): T
{
    const emptyObject = {} as T;  // Cria um objeto vazio do tipo T
    emptyObject.id = '0';
    
    // Função recursiva para limpar as propriedades
    const clean = (obj: any) =>
    {
        for (const key in obj)
        {
            if (obj.hasOwnProperty(key))
            {
                const value = obj[key];

                // Usando switch para determinar o tipo do valor e limpar a propriedade
                switch (typeof value)
                { 
                    case 'string': { obj[key] = ""; break; }  // Para string, coloca string vazia
                    case 'number': { obj[key] = 0; break; }  // Para número, coloca 0            
                    case 'boolean': { obj[key] = false; break; }  // Para booleano, coloca false
                    case 'object':
                    {
                        if (value === null)
                            { obj[key] = null; } // Se for null, mantém null
                        else if (Array.isArray(value))
                            { obj[key] = []; } // Para arrays, define um array vazio
                        else
                            { obj[key] = clean({id: "0"} as BaseEntity); } // Para objetos, chama recursivamente
                        break; 
                    }
                
                    default: { obj[key] = null; }  // Caso não seja um tipo tratado, define como null
                }
            }
        }

        // Inicia a limpeza recursiva para o objeto vazio
        return clean(emptyObject);
    }

    return emptyObject;
}

