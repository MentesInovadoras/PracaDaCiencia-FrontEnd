import { Box } from "@mui/material";

import FastCPFInput from "@/shared/components/input/text_input/FastCPFInput";
import FastTextInput from "@/shared/components/input/text_input/FastTextInput";
import FastEmailInput from "@/shared/components/input/text_input/FastEmailInput";
import FastNumberInput from "@/shared/components/input/text_input/FastNumberInput";
import FastComboBox from "@/shared/components/input/combo_box/FastComboBox";


const FormularioIndividual: React.FC = () =>
{
    return (
        <Box display={"flex"} flexDirection={"column"} gap={4}>
            <FastTextInput
                required
                helpText="Ajuda"
                label="Nome Completo"
                placeholder="João da Silva"
            />
            <FastCPFInput />
            <FastNumberInput />
            <FastEmailInput />
            <FastComboBox

            />
        </Box>
    )
}


export default FormularioIndividual;

