import type { ISeralizerStrategy } from "../serializers/ISerializerStrategy";
import type { BaseEntity, ID } from "../types";
import { ReadService } from "./ReadService";
import { WriteService } from "./WriteService";

export class SimpleCrudService<
  T extends BaseEntity,
  TPayload extends BaseEntity = T
> {
  private readService: ReadService<T>;
  private writeService: WriteService<T, TPayload>;

  public constructor(entityName: string) {
    this.readService = new ReadService(entityName);
    this.writeService = new WriteService(entityName);
  }

  public async getById(id: ID) {
    return await this.readService.getById(id);
  }

  public async list() {
    return await this.readService.list();
  }

  public setSerializeStrategy(strategy: ISeralizerStrategy<T, TPayload>) {
    this.writeService.setSerializeStrategy(strategy);
  }

  public async setEntity(id: ID) {
    this.writeService.fetchEntity(id);
  }

  public setEntityKey(key: keyof T, newValue: any) {
    this.writeService.setEntityKey(key, newValue);
  }

  public entityExists() {
    return this.writeService.entityExists();
  }

  public async economicSave() {
    return await this.writeService.economicSave();
  }

  public async fullSave() {
    return await this.writeService.fullSave();
  }

  public getEntity(): T {
    return this.writeService.entity;
  }
}
