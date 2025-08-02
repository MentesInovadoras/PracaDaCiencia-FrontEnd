import { createTheme } from '@mui/material/styles';


export const lightTheme = createTheme(
    {
        palette:
        {
            mode: 'light',
            primary: { main: '#FFCA28', dark: '#d8ab23ff', },
            secondary: { main: '#FF7043', },
            warning: { main: '#FF5722', },
            success: { main: '#4CAF50', },
            error: { main: '#F44336', },
            info: { main: '#2196F3', },
            
            text: { primary: '#212121', secondary: '#757575', },
            background: { default: '#f5f5f5', paper: '#ffffff', },
        },
        typography:
        {
            fontFamily: 'Roboto, sans-serif',
        },

        components:
        {
            MuiCssBaseline:
            {
                styleOverrides:
                {
                    ':root':
                    {
                        '--mui-primary-main': '#FFCA28',
                        '--mui-info-main': '#2196F3',
                        '--mui-primary-dark': '#d8ab23ff',
                    }
                }
            }
        }
    }
);

