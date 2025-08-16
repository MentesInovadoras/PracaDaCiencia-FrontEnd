import { SimpleCrudService } from "@/shared/service/repository/SimpleCrudServie";
import { type Roteiro } from "../types/Roteiro.d";


const roteiroService = new SimpleCrudService<Roteiro>('roteiros');

export default roteiroService;

