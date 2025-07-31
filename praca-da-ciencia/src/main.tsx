// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './shared/routes';
import { AppThemeProvider } from './shared/themes';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppThemeProvider>
      <AppRoutes />
    </AppThemeProvider>
  </React.StrictMode>
);