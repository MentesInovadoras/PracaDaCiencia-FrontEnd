// src/layouts/landpage/index.tsx
import { Box, Typography } from '@mui/material';
import React from 'react';
import NavBar from "../../../components/navbar"

const LandPage: React.FC = () =>
{
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '100vw',
        textAlign: 'center',
      }}
    >
      <NavBar/>

      <Box
      sx={{
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center',
        height:'100%'
      }}
      >
        <Typography variant="h2" component="h1" gutterBottom color='primary'>
          Bem-vindo à sua LandPage!
        </Typography>
        <Typography variant="body1">
          Este é o layout da sua página inicial.<br/>
          Preencha como for conveniente
        </Typography>
      </Box>
      
    </Box>
  );
}


export default LandPage;

