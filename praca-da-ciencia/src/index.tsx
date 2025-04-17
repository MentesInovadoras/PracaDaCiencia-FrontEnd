import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './router/approutes';
import { ThemeProvider } from '@emotion/react';
import { temaClaro, temaEscuro } from './components/shared/ts/temas';
import { CssBaseline, useMediaQuery } from '@mui/material';
import Cabecalho from './components/shared/ts/cabecalho';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const Index: React.FC = () =>
{
  // Verifica se o usuário tem preferência salva no localStorage
  const storedMode = localStorage.getItem('themeMode');
  const [isDarkMode, setIsDarkMode] = useState(storedMode === 'dark' ? true : false);

  // Escolhe o tema com base no estado (claro ou escuro)
  const theme = isDarkMode ? temaEscuro : temaClaro;

  useEffect( () =>
    {
      // Salva a preferência do tema no localStorage
      localStorage.setItem('themeMode', isDarkMode ? 'dark' : 'light');
    },
      [isDarkMode]
    );


  const toggleTheme = (): boolean =>
  {
    setIsDarkMode(prevState => !prevState);
    return true;
  };

  return (
    <ThemeProvider theme={theme}>
      
      <CssBaseline />

      <BrowserRouter>
        <Cabecalho swapCollorButton={toggleTheme} startTheme={storedMode === 'light' ? true : false}></Cabecalho>
        <AppRoutes isMobile={useMediaQuery(theme.breakpoints.down("sm"))}></AppRoutes>
      </BrowserRouter>

    </ThemeProvider>
  )
}

root.render(

  <React.StrictMode>
    <Index />
  </React.StrictMode>
);

reportWebVitals();
