import FastComboBox from "@/shared/components/input/combo_box/FastComboBox";
import FastForm from "@/shared/components/input/fast_form";
import InputWithLabel from "@/shared/components/input/InputWithLabel";
import FastCPFInput from "@/shared/components/input/text_input/FastCPFInput";
import FastEmailInput from "@/shared/components/input/text_input/FastEmailInput";
import FastNumberInput from "@/shared/components/input/text_input/FastNumberInput";
import FastOptionInput from "@/shared/components/input/text_input/FastOptionInput";
import FastTextInput from "@/shared/components/input/text_input/FastTextInput";
import SimpleRow from "@/shared/components/SimpleRow";
import { MenuItem, Select } from "@mui/material";


const Formularioinstituicao: React.FC = () =>
{
    const selectOptions = () =>
    {
        const options = [];

        for(let i=0; i < 40; i+=10)
        {
            options.push(<MenuItem value={i}>{`de ${i+1} a ${i+10} Visitantes`}</MenuItem>)
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
            />
            <FastCPFInput size="45%"/>
            <FastTextInput
                label="Município de Origem"
                placeholder="Vitória"
                helpText="Se for de outro estado, escreva a sigla (exemplo: Juiz de Fora (MG))"
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


export default Formularioinstituicao;

