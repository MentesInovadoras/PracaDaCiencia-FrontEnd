import { createContext, useContext, useState, type ReactNode } from "react";
import { WriteService } from "../service/repository/WriteService";


export interface ServiceProps
{
    service?: WriteService<any>;
    setService: (service: WriteService<any>) => void;
}

const ServiceContext = createContext<ServiceProps | undefined>(undefined);


interface Props
{
    children: ReactNode;
}


export const AppServiceProvider: React.FC<Props> = ({ children }) =>
{
    const [service, setService] = useState<WriteService<any>>();

    
    return(
        <ServiceContext.Provider value={{ service, setService }}>
            { children }
        </ServiceContext.Provider>
    )
}


export const useServiceContext = () =>
{
  const context = useContext(ServiceContext);
  if (context === undefined)
  {
      throw new Error('serviceContext must be used within a ServiceThemeProvider');
  }

  return context;
};

