// src/themes/index.tsx
import { createTheme } from '@mui/material/styles';

// --- Cores para o tema claro ---
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2', // Azul padrão
    },
    secondary: {
      main: '#9c27b0', // Roxo padrão
    },
    warning: {
      main: '#ff9800', // Laranja
    },
    success: {
      main: '#4caf50', // Verde
    },
    error: {
      main: '#f44336', // Vermelho
    },
    // Adicionando cores 'lights' e 'darks' para complementar
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
});

// --- Cores para o tema escuro ---
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9', // Azul mais claro
    },
    secondary: {
      main: '#ce93d8', // Roxo mais claro
    },
    warning: {
      main: '#ffb74d', // Laranja mais claro
    },
    success: {
      main: '#81c784', // Verde mais claro
    },
    error: {
      main: '#e57373', // Vermelho mais claro
    },
    // Adicionando cores 'lights' e 'darks' para complementar
    text: {
      primary: '#ffffff', // Texto claro
      secondary: '#bdbdbd', // Texto secundário
    },
    background: {
      default: '#121212', // Fundo escuro
      paper: '#424242', // Fundo de componentes
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

