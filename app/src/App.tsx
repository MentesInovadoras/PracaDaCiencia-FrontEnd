import './App.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Container, Typography, Button } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'light', // ou 'dark'
  },
});

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Typography variant="h3" gutterBottom>
          Olá, Material UI!
        </Typography>
        <Button variant="contained" color="primary">
          Clique aqui
        </Button>
      </Container>
    </ThemeProvider>
  );
 }

export default App
