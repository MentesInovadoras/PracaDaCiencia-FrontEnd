import { createTheme } from '@mui/material/styles';


export const darkTheme = createTheme(
    {
        palette:
        {
            mode: 'dark',
            primary: { main: '#e7a201ff', dark: '#e7a201ff', },
            secondary: { main: '#FF8A65', },
            warning: { main: '#FF7043', },
            success: { main: '#81C784', },
            error: { main: '#D32F2F', },
            info: { main: '#64B5F6', },
            text: { primary: '#ffffff', secondary: '#bdbdbd', },
            background: { default: '#121212', paper: '#303030ff', },
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
                    '@global':
                    {
                        ':root':
                        {
                        '--mui-primary-main': '#FFB300FF',
                        '--mui-info-main': '#64B5F6',
                        '--mui-primary-dark': '#e7a201ff',
                        }
                    }
                }
            }
        }
    }
);

