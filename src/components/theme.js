import React from 'react';
import {useSelector} from 'react-redux';
import {Helmet} from 'react-helmet';
import {createGlobalStyle} from 'styled-components';
import {createTheme, ThemeProvider} from '@material-ui/core/styles';

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

const lightPallette = {
  mode: 'light',
  primary: {
    main: '#772ce8',
  },
  secondary: {
    main: '#ff74e4',
  },
};

const darkPallette = {
  mode: 'dark',
  primary: {
    main: '#772ce8',
  },
  secondary: {
    main: '#ff74e4',
  },
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

  svg.MuiSvgIcon-root {
    width: 1em;
    height: 1em;
    font-size: 1.2em;
  }

  button.MuiButtonBase-root {
    font-size: unset;
  }
`;

const Theme = ({children}) => {
  const darkMode = useSelector((state) => state.darkMode.value);
  const font = useSelector((state) => state.font.value);
  const theme = darkMode ? darkTheme : lightTheme;

  const fontFamily = () => {
    switch (font) {
      case 'marker':
        return ['Permanent Marker', 'cursive'].join(',');
      case 'cursive':
        return ['Annie Use Your Telescope', 'cursive'].join(',');
      case 'sans':
        return ['Montserrat', 'Verdana', 'Arial', 'Helvetica', 'sans-serif'].join(',');
      default:
        return font;
    }
  };

  const accentFontFamily = () => {
    switch (font) {
      case 'marker':
        return ['Permanent Marker', 'cursive'].join(',');
      case 'cursive':
        return ['Give you glory', 'cursive'].join(',');
      case 'sans':
        return ['Montserrat', 'Verdana', 'Arial', 'Helvetica', 'sans-serif'].join(',');
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
      {children}
    </ThemeProvider>
  );
};

export default Theme;
