import { createContext, useContext, useState } from "react";
import { WriteService } from "../service/repository/WriteService";
import type { SimpleCrudService } from "../service/repository/SimpleCrudServie";
import type { BaseEntity } from "../service/types";


export interface ServiceProps<T extends BaseEntity>
{
    service?: WriteService<T>|SimpleCrudService<T>;
    setService: (service: WriteService<T> | SimpleCrudService<T>) => void;
}

const ServiceContext = createContext<ServiceProps<any> | undefined>(undefined);


interface Props<T extends BaseEntity>
{
    children: (context: ServiceProps<T>) => React.ReactNode;
}


export const AppServiceProvider = <T extends BaseEntity>({ children }: Props<T>) =>
{
    const [service, setService] = useState<WriteService<T>|SimpleCrudService<T>>();

    
    return(
        <ServiceContext.Provider value={{ service, setService }}>
            { children({ service, setService }) }
        </ServiceContext.Provider>
    )
}


export const useServiceContext = <T extends BaseEntity>(): ServiceProps<T> =>
{
  const context = useContext(ServiceContext);
  if (context === undefined)
  {
      throw new Error('serviceContext must be used within a ServiceThemeProvider');
  }

  return context;
};

