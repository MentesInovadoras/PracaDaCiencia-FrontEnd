//Página criada exclusivamente para servir de base para outras páginas
import VerticalSideBar from "@/shared/components/nav_bar/vertical_navbar";
import { Box } from "@mui/material";

const drawerWidth = 240;

export default function DashboardPage() {
  return (
    <Box>
      <VerticalSideBar sideBarData={[]} drawerWidth={drawerWidth} />
      <Box
        sx={{
          width: `calc(100% - ${drawerWidth}px)`, // Espaçamento para respeitar sidebar
          marginLeft: `${drawerWidth}px`,
        }}
      ></Box>
    </Box>
  );
}
