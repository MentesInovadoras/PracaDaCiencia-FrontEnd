// src/modules/primeiro-modulo/DashboardPage.tsx
import { Typography, Box, Card, CardContent, Input, InputLabel, TextField, TextareaAutosize} from '@mui/material';
import CardView from '../../components/card';
import Sidebar from '../../components/sidebar';

export default function DashboardPage() {
  
  return (
    <Box>
      <Sidebar />
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        height: '100vh',
        width: '100%',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        justifyItems: 'center',
    }}>
      {/*<CardView horario='08:00' />*/}
      
    </Box>
    </Box>
    
  );
}

