/**
 * @description Classe que encapsula a lógica de comunicação com a API
 * @class
 * 
 * @property url a url para onde a classe deve fazer a requisição
 */
export class BaseService
{
    protected readonly url: string;

    public constructor(urlRef: string)
    {
        this.url = urlRef;
    }
}

