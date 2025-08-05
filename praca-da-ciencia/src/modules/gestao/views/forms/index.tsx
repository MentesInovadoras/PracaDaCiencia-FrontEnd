//Página criada exclusivamente para servir de base para outras páginas
import { Typography, Box } from "@mui/material";
import Sidebar from "../../components/sidebar";

const drawerWidth = 240;

export default function DashboardPage() {
  return (
    <Box>
      <Sidebar drawerWidth={drawerWidth} />
      <Box
        sx={{
          width: `calc(100% - ${drawerWidth}px)`, // Espaçamento para respeitar sidebar
          marginLeft: `${drawerWidth}px`,
        }}
      ></Box>
    </Box>
  );
}
