// src/modules/primeiro-modulo/DashboardPage.tsx
import SaveIcon from "@mui/icons-material/Save";
import type { ID } from "@/shared/service/types";

import {
  Typography,
  Box,
  Card,
  CardContent,
  Input,
  TextField,
  TextareaAutosize,
  IconButton,
  Tooltip,
  Checkbox,
  Autocomplete,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { Co2Sharp, OpenInNew } from "@mui/icons-material";
import type { Guia } from "../types/Guia";
import { GuiaWriteService } from "../service/GuiaService";
import { useEffect } from "react";
import { isId } from "@/shared/utils/ServiceTypesCheckers";
import type { VisitaInstituicaoRead, VisitaPessoaRead, VisitaRead } from "../types/Visitas";
import GuiaList from "./guia_list";
import { VisitaWriteService } from "../service/VisitasService";

interface Props {
  visitaData: VisitaRead;
  horario: string;
  responsavel: string;
  instituicao: boolean;
  lock_edit?: boolean;
  observacoes?: string;
  guia?: Guia;
  guiaList?: Guia[];
  guiaWriter?: Guia | ID;
}

const CardView: React.FC<Props> = ({
  visitaData,
  lock_edit = true,
  horario = "08:00",
  responsavel = "",
  instituicao,
  observacoes = "",
  guia,
  guiaList = [],
  guiaWriter,
}) => {
  const service = new VisitaWriteService();

  useEffect(
    () =>
    {
      if(visitaData.tipo_visitante == "Pessoa Física")
        { service.setEntity(visitaData as VisitaPessoaRead); }
      else
        { service.setEntity(visitaData as VisitaInstituicaoRead); }
    },
    []
  );

  async function fastSaveGuia(guia: Guia)
  {
    service.setEntityKey('guia', guia);
    await service.economicSave();
  }

  return (
    <Card
      sx={{
        padding: "20px",
        borderRadius: "25px",
        minWidth: "400px",
        width: "40%",
        maxWidth: "600px",
        position: "relative",
      }}
    >
      {/* Botão de navegação no canto superior direito */}
      {guia?.id && guia.id !== undefined && (
        <Tooltip title="Ver detalhes" placement="left">
          <Box sx={{ position: "absolute", top: 15, right: 15 }}>
            <NavLink
              to={`/gestao/forms/${guia?.id}`}
              style={{ textDecoration: "none" }}
            >
              <IconButton
                size="small"
                color="primary"
                sx={{
                  backgroundColor: "rgba(25, 118, 210, 0.08)",
                  "&:hover": {
                    backgroundColor: "rgba(25, 118, 210, 0.12)",
                  },
                }}
              >
                <OpenInNew fontSize="medium" />
              </IconButton>
            </NavLink>
          </Box>
        </Tooltip>
      )}

      <CardContent
        sx={{
          paddingInline: "10px",
          gap: "20px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography variant="body1">Horário Inicial</Typography>
            <Box
              sx={{
                display: "flex",
                gap: "10px",
              }}
            >
              <Input
                type="time"
                disabled={lock_edit}
                defaultValue={horario}
                placeholder="HH-MM"
                sx={{ maxWidth: "100px" }}
              />
            </Box>
          </Box>
          <Box>
            <Typography>Nº de visitantes</Typography>
            <Input type="number" disabled={lock_edit} defaultValue={horario} />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography>Visitante responsável</Typography>
            <Input
              type="text"
              disabled={lock_edit}
              defaultValue={responsavel}
            />
          </Box>
          <Box>
            <Typography>Instituição</Typography>
            <Checkbox checked={instituicao} disabled size="medium" />
          </Box>
        </Box>

        <Box>
          <GuiaList guiaList={guiaList} defaultGuia={visitaData.guia} onClick={fastSaveGuia}/>
        </Box>
        <Box>
          <Typography>Observações</Typography>
          <TextareaAutosize
            disabled={lock_edit}
            defaultValue={observacoes}
            style={{
              maxWidth: "calc(100% - 0px)",
              minHeight: "50px",
              maxHeight: "150px",
              borderRadius: "25px",
              padding: "10px",
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default CardView;
