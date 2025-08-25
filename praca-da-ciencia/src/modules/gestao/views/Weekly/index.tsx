// src/modules/primeiro-modulo/DashboardPage.tsx
import {
  Box,
} from "@mui/material";
import Sidebar from "../../components/sidebar";
import Table from "../../components/table";
import { visitaReadService } from "../../service/VisitasService";
import gestaoNavItems from "../../const/GestaoNavIItems";
import VerticalSideBar from "@/shared/components/nav_bar/vertical_navbar";
import drawerWidth from "../../const/drawerWidth";

const visitasAgendadas = await visitaReadService.list();



export default function DashboardPage() {
  return (
    <Box>
      <VerticalSideBar items={gestaoNavItems} drawerWidth={drawerWidth} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: `calc(100% - ${drawerWidth}px)`,
          height: "100vh",
          marginLeft: `${drawerWidth}px`,
        }}
      >
        {/* <Typography variant="h3" component="h3">
          Futuras Visitas
        </Typography>
        <Table data={rows} height="100%"></Table> */}
        <Table
          href={false}
          data={visitasAgendadas.map((v: any) => ({
            id: v.id,
            dateTime: v.data_visita,
            responsavel:
              v.tipo_visitante === "Pessoa Física"
                ? v.visitante.nome
                : v.visitante.nome_responsavel,
            guia: v.guia.nome,
            roteiro: v.roteiro.nome,
            instituicao:
              v.tipo_visitante === "Unidade de Ensino" ? false : true,
            escolaridade: v.visitante.escolaridade,
            status: v.status
          }))}
          height="100%"
        />
      </Box>
    </Box>
  );
}
