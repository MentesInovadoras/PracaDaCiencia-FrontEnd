/**
 * @summary Inetrface que define serializadores no contexto da aplicação
 */
export interface ISeralizerStrategy<T, R>
{
    /**
     * Método que faz um parse do objeto no tipo "T" para o tipo "R"
     * @param obj objeto que deseja-se transformar
     * @returns objeto transformado no tipo R
     */
    serialize(obj: T): R;
}

