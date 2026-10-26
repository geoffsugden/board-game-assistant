import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'dark',

    primary: {
      main: '#5F8050',
      light: '#80A66C',
      dark: '#3B5935',
      contrastText: '#FFFFFF',
    },

    secondary: {
      main: '#DDBB62',
      light: '#F0D68B',
      dark: '#AE8735',
      contrastText: '#242719',
    },

    background: {
      default: '#111A13',
      paper: '#202E22',
    },

    text: {
      primary: '#F1F0E4',
      secondary: '#B9C4B3',
    },

    divider: '#465541',

    success: {
      main: '#8FC49A',
    },

    error: {
      main: '#D98A76',
    },

    warning: {
      main: '#DDBB62',
    },
  },

  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',

    h1: {
      fontSize: 'clamp(2rem, 5vw, 3rem)',
      fontWeight: 800,
      letterSpacing: '-0.035em',
      lineHeight: 1.2,
      color: '#E4C575',
    },

    h2: {
      fontSize: '2rem',
      fontWeight: 700,
      letterSpacing: '-0.025em',
      lineHeight: 1.3,
      color: '#E4C575',
    },

    h3: {
      fontSize: '1.5rem',
      fontWeight: 700,
      letterSpacing: '-0.015em',
      lineHeight: 1.35,
      color: '#F1F0E4',
    },

    h4: {
      fontSize: '1.75rem',
      fontWeight: 800,
      letterSpacing: '-0.02em',
      lineHeight: 1.3,
      color: '#E4C575',
    },

    h5: {
      fontSize: '1.2rem',
      fontWeight: 700,
      color: '#F1F0E4',
    },

    h6: {
      fontSize: '1rem',
      fontWeight: 700,
      color: '#E0E8D9',
    },

    subtitle1: {
      fontSize: '1rem',
      fontWeight: 500,
      color: '#C7D0BC',
    },

    subtitle2: {
      fontSize: '0.85rem',
      fontWeight: 500,
      color: '#AEBDA7',
    },

    body1: {
      fontSize: '1rem',
      lineHeight: 1.65,
    },

    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
      color: '#B9C4B3',
    },

    button: {
      fontWeight: 600,
      textTransform: 'none',
    },

    overline: {
      fontWeight: 700,
      letterSpacing: '0.12em',
      color: '#DDBB62',
    },
  },

  shape: {
    borderRadius: 12,
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          minHeight: '100%',
        },

        body: {
          minHeight: '100vh',
          backgroundColor: '#111A13',
          backgroundImage: `
            radial-gradient(
              ellipse at 12% 0%,
              rgba(76, 112, 62, 0.30),
              transparent 48%
            ),
            radial-gradient(
              ellipse at 92% 35%,
              rgba(112, 78, 48, 0.13),
              transparent 38%
            )
          `,
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
        },

        '#root': {
          minHeight: '100vh',
        },

        '::selection': {
          backgroundColor: '#5F8050',
          color: '#FFFFFF',
        },
      },
    },

    MuiContainer: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },

        elevation3: {
          backgroundColor: 'rgba(32, 46, 34, 0.96)',
          border: '1px solid #526047',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.28)',
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#2B3B2C',
          backgroundImage: 'none',
          border: '1px solid #4A5D43',
          borderRadius: 10,
          boxShadow: '0 3px 10px rgba(0, 0, 0, 0.18)',
          transition: 'border-color 150ms ease, background-color 150ms ease',

          '&:hover': {
            backgroundColor: '#344834',
            borderColor: '#789365',
          },
        },
      },
    },

    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: 18,

          '&:last-child': {
            paddingBottom: 18,
          },
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '8px 16px',
          fontWeight: 600,
        },

        containedPrimary: {
          boxShadow: 'none',

          '&:hover': {
            backgroundColor: '#80A66C',
            boxShadow: 'none',
          },
        },

        containedSecondary: {
          boxShadow: 'none',

          '&:hover': {
            backgroundColor: '#F0D68B',
            boxShadow: 'none',
          },
        },

        outlined: {
          borderColor: '#6A7050',

          '&:hover': {
            borderColor: '#DDBB62',
            backgroundColor: 'rgba(221, 187, 98, 0.07)',
          },
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          backgroundColor: '#18251A',

          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#4A5D43',
          },

          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#80A66C',
          },

          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#DDBB62',
          },
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#B9C4B3',
        },
      },
    },

    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: '1px solid #465541',
        },

        head: {
          color: '#E4C575',
          fontWeight: 700,
        },
      },
    },

    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: '#465541',
        },
      },
    },
  },
})

export default theme
