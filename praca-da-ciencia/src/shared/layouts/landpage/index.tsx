// src/layouts/landpage/index.tsx
import { Box, Typography } from '@mui/material';
import React from 'react';

const LandPage: React.FC = () =>
{
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
      }}
    >
      <Typography variant="h2" component="h1" gutterBottom color='primary'>
        Bem-vindo à sua LandPage!
      </Typography>
      <Typography variant="body1">
        Este é o layout da sua página inicial.
      </Typography>
    </Box>
  );
}


export default LandPage;

