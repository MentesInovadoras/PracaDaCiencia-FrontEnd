// src/themes/index.tsx
import { createTheme } from '@mui/material/styles';

// --- Cores para o tema claro ---
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#FFCA28', // Amarelo dourado
    },
    secondary: {
      main: '#FF7043', // Laranja suave
    },
    warning: {
      main: '#FF5722', // Laranja intenso
    },
    success: {
      main: '#4CAF50', // Verde
    },
    error: {
      main: '#F44336', // Vermelho
    },
    info: {
      main: '#2196F3', // Azul claro
    },
    text: {
      primary: '#212121', // Texto escuro
      secondary: '#757575', // Texto secundário
    },
    background: {
      default: '#f5f5f5', // Fundo claro
      paper: '#ffffff', // Fundo de componentes
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
          ':root': {
            '--mui-primary-main': '#FFCA28',
        }
      }
    }
  }
});

// --- Cores para o tema escuro ---
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FFB300FF', // Amarelo suave
    },
    secondary: {
      main: '#FF8A65', // Laranja queimado
    },
    warning: {
      main: '#FF7043', // Laranja suave
    },
    success: {
      main: '#81C784', // Verde suave
    },
    error: {
      main: '#D32F2F', // Vermelho escuro
    },
    info: {
      main: '#64B5F6', // Azul suave
    },
    text: {
      primary: '#ffffff', // Texto claro
      secondary: '#bdbdbd', // Texto secundário
    },
    background: {
      default: '#121212', // Fundo escuro
      paper: '#303030ff', // Fundo de componentes
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@global': {
          ':root': {
            '--mui-primary-main': '#FFB300FF',
          }
        }
      }
    }
  }
});
