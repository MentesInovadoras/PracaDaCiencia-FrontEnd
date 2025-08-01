// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './shared/routes';
import { AppThemeProvider } from './shared/context/ThemeContext'; // Importe do novo local
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';

dayjs.locale('pt-br');


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppThemeProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='pt-br'>
        <AppRoutes />
      </LocalizationProvider>
    </AppThemeProvider>
  </React.StrictMode>
);

