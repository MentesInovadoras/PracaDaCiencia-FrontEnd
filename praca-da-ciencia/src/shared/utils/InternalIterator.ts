/**
 * @interface
 * @summary Essa interface contém um iterador específico de domínio que contém alguns métodos extras que são úteis.
 */
export interface InternalIterator<T, TR=T, TN=T> extends Iterable<T, TR, TN>
{
    /**
     * @summary Esse método é responsável por remover o último objeto retornado pelo iterador.
     */
    remove(): void;
}