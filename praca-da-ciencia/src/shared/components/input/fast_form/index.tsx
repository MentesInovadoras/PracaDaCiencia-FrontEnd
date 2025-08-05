import { AppServiceProvider } from "@/shared/context/ServiceContext";
import type { Props } from "./provider";
import Provider from "./provider";


const FastForm: React.FC<Props> = ({ onSubmit, title, submitButtonTitle, cancelButtonTitle, onClickCancel, id="form", service, children }) =>
{
    return (
        <AppServiceProvider>
            <Provider
                onSubmit={onSubmit}
                service={service}
                cancelButtonTitle={cancelButtonTitle}
                id={id}
                onClickCancel={onClickCancel}
                submitButtonTitle={submitButtonTitle}
                title={title}
            >
                { children }
            </Provider>
        </AppServiceProvider>
    )
}


export default FastForm;

