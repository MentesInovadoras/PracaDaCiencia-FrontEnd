// src/modules/primeiro-modulo/DashboardPage.tsx
import SaveIcon from "@mui/icons-material/Save";
import type { ID } from "@/shared/service/types";

import {
  Typography,
  Box,
  Card,
  CardContent,
  Input,
  InputLabel,
  TextField,
  TextareaAutosize,
  IconButton,
  Tooltip,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { OpenInNew, Visibility, Edit } from "@mui/icons-material";

interface Props {
  id?: ID;
  lock_edit?: boolean;
  horario?: string;
  responsavel?: string;
  instituicao?: string;
  observacoes?: string;
  guia?: string;
}

const CardView: React.FC<Props> = ({
  id = undefined,
  lock_edit = true,
  horario = "08:00",
  responsavel = "",
  instituicao = "",
  observacoes = "",
  guia = "Não definido",
}) => {
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
      {id && id !== undefined && (
        <Tooltip title="Ver detalhes" placement="left">
          <Box sx={{ position: "absolute", top: 15, right: 15 }}>
            <NavLink
              to={`/gestao/forms/${id}`}
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
            <Typography variant="body1">Horário</Typography>
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
              -
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
        <Box>
          <Typography>Visitante responsável</Typography>
          <Input type="text" disabled={lock_edit} defaultValue={responsavel} />
        </Box>
        <Box>
          <Typography>Instituição</Typography>
          <Input type="text" disabled={lock_edit} defaultValue={instituicao} />
        </Box>
        <Box>
          <Typography>Guia</Typography>
          <Input type="text" defaultValue={guia} />{" "}
          {/* TODO: Fazer uma forma rápida de salvar o guia designado */}
          <SaveIcon/>
          {/* TODO: fazer este botão salvar o Guia do horário específico */}
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
