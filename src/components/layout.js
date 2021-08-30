import React from 'react';
import {useSelector} from 'react-redux';
import {Helmet} from 'react-helmet';
import {createGlobalStyle} from 'styled-components';
import TopNavigation from './navigation/topNavigation';
import BottomNavigation from './navigation/bottomNavigation';
import {createTheme, ThemeProvider} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Settings from './settings/settings';

const lightTheme = {
  color: '#424242',
  backgroundColor: '#f7f7f8',
  accentColor: '#772ce8',
};

const darkTheme = {
  color: '#fff',
  backgroundColor: '#212121',
  accentColor: '#772ce8',
};

const ThemeStyles = createGlobalStyle`
  body {
    font-display: swap;
    font-family: ${(props) => props.font};
    display: flex;
    justify-content: center;
    color: ${(props) => props.theme.color};
    background-color: ${(props) => props.theme.backgroundColor};
    
    // fluid typography
    font-size: clamp(18px, 18px + 6 * ((100vw - 420px) / 604), 24px);
  }

  h1, h2, h3, h4, nav {
    font-family: ${(props) => props.accentFont};
  }

  h1, h2, h3, h4 {
    color: ${(props) => props.theme.accentColor};
  }
`;

const lightPallette = {
  type: 'light',
  primary: {
    main: '#772ce8',
  },
  secondary: {
    main: '#ff74e4',
  },
};

const darkPallette = {
  type: 'dark',
  primary: {
    main: '#772ce8',
  },
  secondary: {
    main: '#ff74e4',
  },
};

const Layout = ({children, location}) => {
  const darkMode = useSelector((state) => state.darkMode.value);
  const font = useSelector((state) => state.font.value);
  const theme = darkMode ? darkTheme : lightTheme;

  const fontFamily = () => {
    switch (font) {
      case 'clean':
        return ['Poppins', 'Verdana', 'Arial', 'Helvetica', 'sans-serif'].join(',');
      case 'marker':
        return ['Permanent Marker', 'cursive'].join(',');
      case 'cursive': // default
        return ['Annie Use Your Telescope', 'cursive'].join(',');
      default:
        return font;
    }
  };

  const accentFontFamily = () => {
    switch (font) {
      case 'clean':
        return ['Amatic SC', 'Verdana', 'Arial', 'Helvetica', 'sans-serif'].join(',');
      case 'marker':
        return ['Permanent Marker', 'cursive'].join(',');
      case 'cursive': // default
        return ['Give you glory', 'cursive'].join(',');
      default:
        return font;
    }
  };

  const getTheme = () => {
    return createTheme({
      typography: {
        fontFamily: fontFamily(),
      },
      palette: darkMode ? darkPallette : lightPallette,
    });
  };

  return (
    <ThemeProvider theme={getTheme()}>
      <ThemeStyles theme={theme} font={fontFamily()} accentFont={accentFontFamily()} />
      <Helmet>
        <meta content={theme.backgroundColor} name="theme-color" />
      </Helmet>
      <Box
        sx={{
          display: {xs: 'none', sm: 'block'},
          displayPrint: 'none',
          backgroundColor: theme.backgroundColor,
        }}
      >
        <TopNavigation />
      </Box>
      <Box sx={{maxWidth: 600, margin: 1}}>
        {children}
        <Box sx={{displayPrint: 'none', marginBottom: '56px'}}>
          <Settings />
        </Box>
      </Box>
      <BottomNavigation location={location} theme={theme} />
    </ThemeProvider>
  );
};

export default Layout;
