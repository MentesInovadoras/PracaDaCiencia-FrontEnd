import api from "../api";
import type { BaseEntity, ID } from "../types";
import { BaseService } from "./BaseService";


/**
 * @description Classe base para serviços que desejam pegar por id e listar entidades
 * 
 * @class
 * 
 * @constructor
 * 
 * @property entityName nome da entidade para puxar da api
 */
export class ReadService<T extends BaseEntity> extends BaseService
{
    public constructor(entityName: string)
    {
        super(entityName);
    }

    /**
     * @description pega uma entidade baseado no id passado
     * @param id id da entidade solicitada
     * @returns entidade com o tipo T especificado
     */
    public async getById(id: ID): Promise<T>
    {
        return (await api.get(`${this.url}/${id}/`)).data as T;
    }

    /**
     * @description lista todas as entidades da api
     * @returns uma lista com as entidades do tipo T especificado
     */
    public async list(): Promise<T[]>
    {
        return (await api.get(this.url)).data as T[];
    }
}

