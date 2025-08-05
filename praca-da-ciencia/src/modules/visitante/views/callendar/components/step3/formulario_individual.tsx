import FastTextInput from "@/shared/components/input/text_input/FastTextInput";
import FastEmailInput from "@/shared/components/input/text_input/FastEmailInput";
import FastNumberInput from "@/shared/components/input/text_input/FastNumberInput";
import FastOptionInput from "@/shared/components/input/text_input/FastOptionInput";
import FastForm from "@/shared/components/input/fast_form";
import SimpleRow from "@/shared/components/SimpleRow";
import service from "@/modules/visitante/service/VisitaService";


const FormularioIndividual: React.FC = () =>
{
    return (
        <FastForm
            onSubmit={()=>{console.log(service)}}
            title="Suas Informações"
            submitButtonTitle="Confirmar"
            onClickCancel={()=>{console.log("clicou cancelar")}}
        >
            <SimpleRow title="Sobre Você" divider>
                <FastTextInput
                    required
                    label="Nome Completo"
                    placeholder="João da Silva"
                    size="45%"
                    onChange={nv=>service.setEntityKey("nome_visitante", nv)}
                    startValue={service.entity.nome_visitante}
                />
                { /* TODO: FastComboBox */ }
                <FastTextInput
                    label="Município de Origem"
                    placeholder="Vitória"
                    helpText="Se for de outro estado, escreva a sigla (exemplo: Juiz de Fora (MG))"
                    size="45%"
                    service={{ service: service, key: "CEP_visitante" }}
                /> 
            </SimpleRow>

            <SimpleRow title="Contatos" divider>
                <FastNumberInput size="20%" onChange={nv=>service.setEntityKey("telefone_visitante", nv)}/>  
                <FastEmailInput required size="60%" onChange={nv=>service.setEntityKey("email_visitante", nv)}/>
            </SimpleRow>
            <FastOptionInput />
        </FastForm>
    )
}


export default FormularioIndividual;

