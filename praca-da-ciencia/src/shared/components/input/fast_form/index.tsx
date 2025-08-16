import { AppServiceProvider } from "@/shared/context/ServiceContext";
import type { Props } from "./provider";
import Provider from "./provider";
import type { BaseEntity } from "@/shared/service/types";


const FastForm = <T extends BaseEntity>({
        onSubmit,
        title,
        submitButtonTitle,
        cancelButtonTitle,
        onClickCancel,
        id,
        service,
        children
    }: Props<T> ) =>
{
    return (
        <AppServiceProvider>
            {
                () =>(
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
                )
            }
        </AppServiceProvider>
    )
}


export default FastForm;

