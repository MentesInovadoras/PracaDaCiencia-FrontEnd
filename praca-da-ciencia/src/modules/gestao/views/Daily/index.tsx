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
import Sidebar from "../../components/sidebar";

const drawerWidth = 240;

export default function DashboardPage() {
  return (
    <Box>
      <Sidebar drawerWidth={drawerWidth} />
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
        <CardView
          id={1}
          horario="08:00"
          responsavel="indefinido"
          instituicao="indefinido"
        />
        <CardView
          id={2}
          horario="08:00"
          responsavel="indefinido"
          instituicao="indefinido"
        />
        <CardView
          id={3}
          horario="08:00"
          responsavel="indefinido"
          instituicao="indefinido"
        />
        <CardView
          id={4}
          horario="08:00"
          responsavel="indefinido"
          instituicao="indefinido"
        />
      </Box>
    </Box>
  );
}
