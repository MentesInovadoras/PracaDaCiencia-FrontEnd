// src/modules/primeiro-modulo/DashboardPage.tsx
import { Typography, Box, Card, CardContent, Input, InputLabel, TextField, TextareaAutosize} from '@mui/material';

interface Props {
  lock_edit?: boolean;
  horario?: string;
  responsavel?: string;
  instituicao?: string;
  observacoes?: string;
  guia?: string;
}

const CardView: React.FC<Props> = ({
  lock_edit = true,
  horario = '08:00',
  responsavel = '',
  instituicao = '',
  observacoes = '',
  guia = 'Não definido'
}) => {
  return (
      <Card sx={{
        padding:'20px',
        borderRadius:'25px',
        minWidth:'400px',
		    width:'40%',
		    maxWidth:'600px',
      }}>
        <CardContent sx={{
			paddingInline:'10px',
			gap: '20px',
			display: 'flex',
			flexDirection: 'column',
		}}>
          <Box sx={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'space-between',
          }}>
            <Box>
              <Typography variant='body1'>Horário</Typography>
              <Box sx={{
                display: 'flex',
                gap: '10px',
              }}>
                <Input type="time" disabled={lock_edit} defaultValue={horario} placeholder='HH-MM' sx={{ maxWidth: '100px' }}/>
                -
                <Input type="time" disabled={lock_edit} defaultValue={horario} placeholder='HH-MM' sx={{ maxWidth: '100px' }}/>
              </Box>
            </Box>
            <Box>
              <Typography>Nº de visitantes</Typography>
              <Input type="number" disabled={lock_edit} defaultValue={horario} />
            </Box>
          </Box>
		  <Box>
			<Typography>visitante responsável</Typography>
          	<Input type="text" disabled={lock_edit} defaultValue={responsavel} />
		  </Box>
		  <Box>
			<Typography>Instituição</Typography>
          	<Input type="text" disabled={lock_edit} defaultValue={instituicao} />
		  </Box>
      <Box>
			<Typography>Guia</Typography>
          	<Input type="text" defaultValue={guia} />
		  </Box>
		  <Box>
			<Typography>Observações</Typography>
          	<TextareaAutosize disabled={lock_edit} defaultValue={observacoes} style={{ maxWidth: 'calc(100% - 0px)', minHeight: '50px', maxHeight: '150px', borderRadius:'25px', padding:'10px' }} />
		  </Box>
        </CardContent>
      </Card>
  );
}

export default CardView;