import { createTheme, responsiveFontSizes} from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { purple } from '@mui/material/colors';

// Create a theme instance.
let theme = createTheme({
  palette: {
    // type: 'dark', // For Dark Theme

    // primary: {
    //   main: purple[500],
    // },
    // secondary: {
    //   main: '#11cb5f',
    // },
    // error: {
    //   main: red.A400,
    // },
    background: {
      default: '#fff',
    },
  },
  typography: {
    // In Chinese and Japanese the characters are usually larger,
    // so a smaller fontsize may be appropriate.
    fontSize: 14,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body:  {
          backgroundImage: 'url("/static/background.jpg")',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          backgroundSize: "cover",
          backgroundPosition: "bottom right",
          fontFamily: 'Myriad Pro'
        },
      },
    },
    MuiTypography : {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontFamily: 'Myriad Pro',
        },
      },
    },
  },
 
});

theme.typography.h3 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.4rem',
  },
};
//theme = responsiveFontSizes(theme);

export default theme;