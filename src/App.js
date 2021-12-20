import React from 'react';
import {ThemeProvider} from 'styled-components';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

import themes from './styles/themes';

function App() {
  return (
    <>
      <ThemeProvider theme={themes.dark}>
        <GlobalStyle />
        <Layout />
      </ThemeProvider>
    </>
  );
};

export default App;
