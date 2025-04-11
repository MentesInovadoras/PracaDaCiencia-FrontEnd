import { GenericAbstractService } from "../services/AbstractService";
import TecnicoService from "../services/TecnicoService";
import ServiceOptions from "./ServiceOptions";

class ServiceFactory
{
    private static buildUrl(serviceOption: ServiceOptions): string
    {
        return `${process.env.REACT_APP_API_URL}${serviceOption}`
    }

    public static buildService(serviceOption: ServiceOptions): GenericAbstractService
    {
        switch(serviceOption)
        {
            case ServiceOptions.TECNICO: {return new TecnicoService(ServiceFactory.buildUrl(serviceOption)); }
        }
    }
}


export default ServiceFactory;