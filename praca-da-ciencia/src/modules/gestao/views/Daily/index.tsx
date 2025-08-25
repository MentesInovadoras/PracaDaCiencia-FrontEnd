// src/modules/primeiro-modulo/DashboardPage.tsx
import {
  Typography,
  Box,
  Card,
  CardContent,
  Input,
  InputLabel,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import CardView from "../../components/card";
import VerticalSideBar from "@/shared/components/nav_bar/vertical_navbar";
import gestaoNavItems from "../../const/GestaoNavIItems";
import {
  visitaReadService,
  visitaWriteService,
} from "../../service/VisitasService";
import drawerWidth from "../../const/drawerWidth";
import { guiaReadService, guiaWriteService } from "../../service/GuiaService";
import type { ID } from "@/shared/service/types";
import type {
  VisitaInstituicaoRead,
  VisitaPessoaRead,
  VisitaRead,
} from "../../types/Visitas";

// TODO trocar visitaReadService por uma função que liste apenas as visitas do dia
const visitasHoje = await visitaReadService.list();
// const guiaList = await guiaReadService.list()
const guiaList = await guiaReadService.list();
const guiaWriter = guiaWriteService;

export default function DashboardPage() {
  return (
    <Box>
      <VerticalSideBar items={gestaoNavItems} drawerWidth={drawerWidth} />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            md: "1fr",
            lg: "repeat(2, 1fr)",
            xl: "repeat(3, 1fr)",
          },
          rowGap: "50px",
          width: `calc(100% - ${drawerWidth}px)`,
          marginLeft: `${drawerWidth}px`,
          justifyItems: "center",
          paddingTop: "50px",
        }}
      >
        {visitasHoje.map((v: VisitaRead, index: number) => {
          // Converte e formata para HH:MM
          const horario = new Date(v.data_visita).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false, // 24h
          });
          v.guia
            ? guiaWriter.setEntity(v.guia)
            : guiaWriter.setEntity(guiaList[index]);

          let nome_visitante;
          let nome_visitante_responsavel;

          if (v.tipo_visitante == "Pessoa Física") {
            const visitaParsed = v as VisitaPessoaRead;
            nome_visitante = visitaParsed.visitante.nome;
            nome_visitante_responsavel = visitaParsed.visitante.nome;
          } else {
            const visitaParsed = v as VisitaInstituicaoRead;
            nome_visitante = visitaParsed.visitante.nome_instituicao;
            nome_visitante_responsavel =
              visitaParsed.visitante.nome_responsavel;
          }

          return (
            <CardView
              visitaData={v}
              key={v.id}
              horario={horario}
              responsavel={nome_visitante_responsavel}
              instituicao={
                v.tipo_visitante === "Unidade de Ensino" ? false : true
              }
              guia={v.guia}
              observacoes={v.observacao}
              guiaList={guiaList}
              guiaWriter={v.guia}
            />
          );
        })}
      </Box>
    </Box>
  );
}
