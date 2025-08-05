import service from "@/modules/visitante/service/VisitaService";
import FastForm from "@/shared/components/input/fast_form";
import InputWithLabel from "@/shared/components/input/InputWithLabel";
import FastEmailInput from "@/shared/components/input/text_input/FastEmailInput";
import FastNumberInput from "@/shared/components/input/text_input/FastNumberInput";
import FastOptionInput from "@/shared/components/input/text_input/FastOptionInput";
import FastTextInput from "@/shared/components/input/text_input/FastTextInput";
import SimpleRow from "@/shared/components/SimpleRow";
import { MenuItem, Select } from "@mui/material";


const FormularioColetivo: React.FC = () =>
{
    const selectOptions = () =>
    {
        const options = [];

        for(let i=2; i <= 10; i++)
        {
            options.push(<MenuItem value={i}>{`${i} Visitantes`}</MenuItem>)
        }

        return options;
    }

    return(
    <FastForm onSubmit={()=>{}} title="Dados do Responsável">
        <SimpleRow title="Sobre Você" divider>
            <FastTextInput
                required
                helpText="Ajuda"
                label="Nome Completo"
                placeholder="João da Silva"
                size="45%"
                service={{service: service, key: "nome_visitante"}}
            />
            <FastTextInput
                label="Município de Origem"
                placeholder="Vitória"
                helpText="Se for de outro estado, escreva a sigla (exemplo: Juiz de Fora (MG))"
                size="45%"
            /> 
        </SimpleRow>

        <SimpleRow title="Contatos" divider>
            <FastNumberInput size="20%" />  
            <FastEmailInput required size="60%" />
        </SimpleRow>
        <InputWithLabel label="Número de Visitates" required>
            <Select>
                { selectOptions() }
            </Select>
        </InputWithLabel>
        <FastOptionInput />
    </FastForm>
    )
}


export default FormularioColetivo;

