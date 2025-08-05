// src/layouts/landpage/index.tsx
import { Box, Typography, Grid } from "@mui/material";
import React from "react";
import NavBar from "../../../components/navbar";

const LandPage: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100vw",
        textAlign: "center",
        alignItems:"center"
      }}
    >
      <NavBar />
      <Box
        sx={{
          justifyItems: "center",
          alignItems: "center",
          height: "100%",
          width:"90%",
          paddingTop: "20px",
        }}
      >
        <Box sx={{ width: "85%" }}>
          <Typography variant="h3">Explore a Praça da Ciência</Typography>
          <Typography variant="h6">
            Um lugar onde você pode aprender e explorar a ciência de maneira
            divertida e educativa!
          </Typography>
          <hr />
        </Box>
        <Typography variant="h4" align="center" sx={{ marginTop: "20px" }}>
          Como você vai visitar a gente?
        </Typography>
        <Grid container direction={"row"} spacing={2} justifyContent="center">
          {/* Adicionar Banners para visitas */}
          <Grid size={4}>xablau</Grid>
          <Grid size={4}>xablau</Grid>
          <Grid size={4}>xablei</Grid>
        </Grid>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ paddingTop: "100px" }}
        >
          Sobre o Projeto
        </Typography>
        <Typography variant="h6" align="left">
          A Praça da Ciência é um ponto turístico de prestígio na região
          metropolitana de Vitória, Espírito Santo. Crianças e adultos podem
          aprender sobre física, astronomia, biologia, história e muito mais.
          Nosso objetivo é criar uma forma simples e eficiente para que as
          pessoas possam agendar suas visitas e aproveitar ao máximo essa
          experiência de aprendizado.
        </Typography>
        <Typography variant="body1" align="left">
          Este projeto foi desenvolvido por estudantes do Instituto Federal de
          Educação, Ciências e Tecnologia do Espírito Santo (Ifes), com o
          intuito de proporcionar uma melhor organização para o agendamento de
          visitas. A plataforma permitirá que os visitantes agendem seus
          horários, otimizando o fluxo de pessoas e tornando a experiência ainda
          mais enriquecedora.
        </Typography>
      </Box>
    </Box>
  );
};

export default LandPage;
