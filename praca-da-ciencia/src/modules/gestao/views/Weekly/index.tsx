// src/modules/primeiro-modulo/DashboardPage.tsx
import { Typography, Box, Card, CardContent, Input, InputLabel, TextField, TextareaAutosize} from '@mui/material';
import Sidebar from '../../components/sidebar';
import Table from '../../components/table'
import type { Data } from '../../components/table';

const rows: Data[] = [
  { id: 1, dateTime: new Date('2025-08-01T08:30:00'), responsavel: 'Ana Costa', instituicao: 'Universidade Federal A', guide: 'Prof. Ricardo Lima' },
  { id: 2, dateTime: new Date('2025-08-01T09:00:00'), responsavel: 'Bruno Silva', instituicao: 'Instituto B', guide: 'Dra. Camila Torres' },
  { id: 3, dateTime: new Date('2025-08-02T10:15:00'), responsavel: 'Carlos Mendes', instituicao: 'Universidade C', guide: 'Prof. Helena Dias' },
  { id: 4, dateTime: new Date('2025-08-02T11:00:00'), responsavel: 'Daniela Rocha', instituicao: 'Centro Técnico D', guide: 'Dr. Vinícius Araújo' },
  { id: 5, dateTime: new Date('2025-08-03T14:45:00'), responsavel: 'Eduardo Freitas', instituicao: 'Instituto E', guide: 'Dra. Fernanda Souza' },
  { id: 6, dateTime: new Date('2025-08-03T15:30:00'), responsavel: 'Fabiana Lima', instituicao: 'Universidade F', guide: 'Prof. Lucas Nogueira' },
  { id: 7, dateTime: new Date('2025-08-04T08:00:00'), responsavel: 'Gabriel Martins', instituicao: 'Faculdade G', guide: 'Dra. Roberta Pires' },
  { id: 8, dateTime: new Date('2025-08-04T08:45:00'), responsavel: 'Helena Almeida', instituicao: 'Centro H', guide: 'Prof. Marcelo Cunha' },
  { id: 9, dateTime: new Date('2025-08-05T09:30:00'), responsavel: 'Igor Santos', instituicao: 'Instituto I', guide: 'Dr. Sérgio Lopes' },
  { id: 10, dateTime: new Date('2025-08-05T10:00:00'), responsavel: 'Juliana Barbosa', instituicao: 'Universidade J', guide: 'Dra. Mariana Braga' },
];

const drawerWidth = 240;

export default function DashboardPage() {
  
  return (
    <Box>
      <Sidebar 
      drawerWidth={drawerWidth}/>
      <Box sx={{
        display: 'flex',
        flexDirection:'column',
        width: `calc(100% - ${drawerWidth}px)`,
        height:'100vh',
        marginLeft: `${drawerWidth}px`,
    }}>
        <Typography
        variant='h3'
        component='h3'
        >
            Futuras Visitas
        </Typography>
        <Table data={rows} height='100%'></Table>
    </Box>
    </Box>
  );
}

