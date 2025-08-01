import api from "../../../shared/service/api";
import { BaseService } from "../../../shared/service/repository/BaseService";
import type { HorariosDisponiveis } from "../types/DiasDisponiveis";


export class DiasDisponiveisService extends BaseService
{
    private readonly horariosStack: HorariosDisponiveis[] = [];

    private readonly indisponiveisUrl: string;
    private readonly horariosUrl: string;

    public constructor()
    {
        super('');
        this.indisponiveisUrl = `${this.url}dias_indisponiveis/`
        this.horariosUrl = `${this.url}horarios_disponiveis/`
    }

    public async listIndisponiveis(): Promise<Date[]>
    {
        const response = (await api.get(this.indisponiveisUrl)).data;
        return response.map((data: string) => new Date(data));
    }

    public async getHorariosDisponiveis(day: Date): Promise<string[]>
    {
        for(const result of this.horariosStack)
        {
            if(result.diaReferencia.getTime() == day.getTime())
                { return result.valores; }
        }

        const response = (await api.get(`${this.horariosUrl}${day.toDateString()}`)).data;

        this.horariosStack.push({diaReferencia: day, valores: response});

        return response;
    }
}


const diasDisponiveisService = new DiasDisponiveisService();


export default diasDisponiveisService;

