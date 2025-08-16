import { SimpleCrudService } from "@/shared/service/repository/SimpleCrudServie";
import type { Guia } from "../types/Guia";


const guiaService = new SimpleCrudService<Guia>("guias");


export default guiaService;

