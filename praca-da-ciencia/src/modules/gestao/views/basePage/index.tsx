//Página criada exclusivamente para servir de base para outras páginas
import VerticalSideBar from "@/shared/components/nav_bar/vertical_navbar";
import { Box, Typography } from "@mui/material";
import drawerWidth from "../../const/drawerWidth";
import gestaoNavItems from "../../const/GestaoNavIItems";

export default function DashboardPage() {
  return (
    <Box>
      <VerticalSideBar items={gestaoNavItems} drawerWidth={drawerWidth} />
      <Box
        sx={{
          width: `calc(100% - ${drawerWidth}px)`, // Espaçamento para respeitar sidebar
          marginLeft: `${drawerWidth}px`,
        }}
      >
        <Typography>Pagina de Base</Typography>
      </Box>
    </Box>
  );
}
