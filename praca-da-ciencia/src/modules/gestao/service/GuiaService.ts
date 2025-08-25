import { SimpleCrudService } from "@/shared/service/repository/SimpleCrudServie";
import type { Guia } from "../types/Guia";
import { ReadService } from "@/shared/service/repository/ReadService";
import { WriteService } from "@/shared/service/repository/WriteService";

const GuiaService = new SimpleCrudService<Guia>("guias");

export class GuiaReadService extends ReadService<Guia>{
    public constructor(){
        super("guias")
    }

}

export class GuiaWriteService extends WriteService<Guia>{
    public constructor(){
        super("guias")
    }

    

}

export const guiaReadService = new GuiaReadService();
export const guiaWriteService = new GuiaWriteService();

export default GuiaService;
