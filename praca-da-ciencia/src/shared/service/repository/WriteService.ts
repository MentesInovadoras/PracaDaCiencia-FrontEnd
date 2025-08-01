import type { AxiosResponse } from "axios";
import { editSomeKey, emptyEntity } from "../../utils/BaseEntityManipulation";
import api from "../api";
import { ParseMultiEntityStrategy } from "../serializers/ComunsStrategys";
import type { ISeralizerStrategy } from "../serializers/ISerializerStrategy";
import type { BaseEntity, ID } from "../types";
import { BaseService } from "./BaseService";


/**
 * @type Tipo que mapeia um tipo prévio setando todos os seus atributos como booleans
 */
type WriteMapper<T> = { [key in keyof T]: boolean } ;

/**
 * @type alaias para resposta de requições que não foram tratadas
 */
type GenericAxiosResponse = Promise<AxiosResponse<any, any>>;


/**
 * @description classe base de serviços para atualizar entidades na api
 * 
 * @class
 * 
 * @generic `ReadType` tipo genérico que representa o tipo de entidade que será manipulada
 * @generic `WriteType` tipo genérico que representa o tipo que será submetido para a api
 * 
 * @constructor
 * 
 * @property serializer armazena a estratégia de serialização para o serviço
 * @property entity entidade que será manipulada pelo serviço e pelo usuário externo
 * @property mustUpdate representa o conjunto de keys que deseja-se atualizar para economizar requisições
 */
export class WriteService<ReadType extends BaseEntity, WriterType extends BaseEntity = ReadType> extends BaseService
{
    protected serializer: ISeralizerStrategy<ReadType, WriterType>;
    public entity: ReadType;
    protected mustUpdate: WriteMapper<ReadType>;

    /**
     * 
     * @param entityName nome da entidade que sera manipulada
     * @param serializeStrategy estratégia de serialização (utiliza o ParseMultiEntityStrategy) por padrão
     * @param id parâmetro que indica o id da entidade que deseja-se manipular (se não for passado entende-se que a entidade será criada)
     */
    public constructor(entityName: string, serializeStrategy: ISeralizerStrategy<ReadType, WriterType> = new ParseMultiEntityStrategy(), id?: ID)
    {
        super(entityName);
        this.serializer = serializeStrategy;
        this.entity = emptyEntity();
        this.mustUpdate = {} as WriteMapper<ReadType>;

        if(id != undefined)
            { this.setEntity(id); }
    }

    /**
     * @description permite alterar a estratégia de serialização
     * @param strategy estratégia de serialização
     */
    public setSerializeStrategy(strategy: ISeralizerStrategy<ReadType, WriterType>)
    {
        this.serializer = strategy;
    }

    /**
     * @description busca o id passado na api e coloca ela em entity
     * @param id id da entidade buscada
     */
    public async setEntity(id: ID)
    {
        const response = (await api.get(`${this.url}${id}/`)).data;

        Object.assign(this.entity, response);
        this.cleanUpdate();
    } 

    /**
     * @description método para manipular os atributos da entidade. Utilize esse método para utilizar corretamente a forma de salvamento econômica.
     * @param key propriade que deseja-se manipular
     * @param newValue valor a ser definido na entidade
     */
    public setEntityKey(key: keyof ReadType, newValue: any)
    {
        editSomeKey(this.entity, key, newValue);
        this.mustUpdate[key] = true;
    }

    /**
     * @description verifica se o id da entidade está definido; se estiver existo o POTENCIAL de existir de fato na api, mas abstrai-se como existindo de fato
     * @returns verdadeiro se existir, caso contrário falso
     */
    public entityExists(): boolean
    {
        return (typeof(this.entity.id)==="string"?Number.parseInt(this.entity.id):this.entity.id) >= 0;
    }

    /**
     * @description salva o valores editados de `this.entity` na api caso a entidade não exista, se existir cria ela
     * @returns resposta da requisição
     */
    public async economicSave(): GenericAxiosResponse
    {
        if(this.entityExists())
            { return await this.economicUpdate(); }
        return await this.create();
    }

    /**
     * @description salva todos os valores de `this.entity` na api caso a entidade não existia, se existir cria ela
     * @returns resposta da requisição
     */
    public async fullSave(): GenericAxiosResponse
    {
        if(this.entityExists())
            { return await this.fullUpdate(); }
        return await this.create();
    }

    /**
     * @description realiza um post para criar a entidade e salva o id gerado em `this.entity.id`
     * @returns resposta da requisição
     */
    private async create(): GenericAxiosResponse
    {
        this.cleanUpdate();
        const response = await api.post(this.url, this.serializer.serialize(this.entity));
        this.entity.id = response.data.id;
        return response;
    }

    /**
     * @description realiza um patch na api para atualizar somente os dados editados de `this.entity`
     * @returns resposta da requisição
     */
    private async economicUpdate(): GenericAxiosResponse
    {
        const serialize = {} as {[key:string]:any};
        for(const key in this.mustUpdate)
        {
            if(this.mustUpdate[key])
                { serialize[key] = this.entity[key]; }
        }
        this.cleanUpdate();
        return await api.patch(`${this.url}${this.entity.id}/`, serialize);
    }

    /**
     * @description realiza um put na api para atualizar todos os dados da entidade
     * @returns resposta da requisição
     */
    private async fullUpdate(): GenericAxiosResponse
    {
        this.cleanUpdate();
        return await api.put(`${this.url}/${this.entity.id}/`, this.serializer.serialize(this.entity));
    }

    /**
     * @description reinicia os atributos a serem editados para falso (ou seja, nenhum valor a ser salvo)
     */
    private cleanUpdate()
    {
        for(const key in this.mustUpdate)
            { this.mustUpdate[key] = false; }
    }
}

