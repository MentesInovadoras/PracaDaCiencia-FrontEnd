import { WriteService } from "@/shared/service/repository/WriteService";
import type { VisitaRead, VisitaWrite } from "../types/Visitas";
import { ParseMultiEntityStrategy } from "@/shared/service/serializers/ComunsStrategys";


export class VisitaBaseSerializer extends ParseMultiEntityStrategy<VisitaRead, VisitaWrite>
{
    public serialize(obj: VisitaRead): VisitaWrite
    {
        const serializer = super.serialize(obj);
        serializer.data_visita = new Date(serializer.data_visita);
        serializer.status = "Agendado";

        return serializer;
    }
}


export const visitaBaseSerialize = new VisitaBaseSerializer();


export class VisitaWriteService extends WriteService<VisitaRead, VisitaWrite>
{
    public constructor()
    {
        super("visitas", visitaBaseSerialize)
    }

    public async visitaIndividual(): Promise<any>
    {
        this.entity.numero_visitantes = 1;
        this.entity.tipo_visita = "Pessoa Física";
        return await this.economicSave();
    }

    public async visitaColetiva(): Promise<any>
    {
        this.entity.tipo_visita = "Pessoa Física";
        return await this.economicSave();
    }

    public async visitaInstitucional(): Promise<any>
    {
        this.entity.tipo_visita = "Pessoa Jurídica";
        return await this.economicSave();
    }
}


const visitaWriteService = new VisitaWriteService();


export default visitaWriteService;

