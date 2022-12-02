import React,{useState,useMemo, useEffect, useLayoutEffect} from 'react';
import {ThemeProvider} from 'styled-components';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

import themes from './styles/themes';

function App() {
  const [theme, setTheme] = useState('dark');
  // const [qualquer, setQualquer] = useState(123)

  const currentTheme = useMemo(()=>{
    return themes[theme] || themes.dark;
  },[theme]);

  console.log(currentTheme);

  function handleToogleTheme(){
    setTheme(prevState => 
      prevState === 'dark' 
      ? 'light'
      :'dark')
  }

  // função de efeito
  // sempre q hover uma renderização o useEffect vai rodar
  //ele ASSÍNCRONA
  // useEffect(() => {
  //   console.debug('useEffect executou')
  //   localStorage.setItem('theme', JSON.stringify(theme))
  // },[theme])//para executar apenas uma vez depois do mount, é só colocar esse array de dependencias vazio
  // com esse array vazio o useEffect só será executado uma vez
  // com algum elemnto dentro do array ele executará toda vez que houver uma alteração no state ou na prop q estiver no array

  // console.debug(qualquer)

  // esse é executado antes do react jogar as mudanças na tela do usuário. ele é SÍNCRONO, ele trava a renderização
  useLayoutEffect(() =>{
    console.log('useLayoutEffect');

    for (let i = 0; i <= 15000; i++) {
      console.debug(i)
      
    }
  },[theme]) 

  // useEffect(() => {
  //     console.debug('tema mudou')
  //     for (let i = 0; i <= 15000; i++) {
  //       console.debug(i + 'useEffect')
        
  //     }
  //   },[theme])

    // useEffect(() => {
    //   console.debug('primeiro render')
    // },[])

    // useEffect(() => {
    //   console.debug('todo render')
    // })

  return (
    <>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyle />
        {/* <button onClick={() => setQualquer(Math.random())}>Olá</button> */}
        {/* <button onClick={handleToogleTheme}>toggle</button> */}
        {/* {theme === 'dark' && (
          <Layout 
            onToggleTheme={handleToogleTheme}
            selectedTheme={theme}
          />
        )} */}
        <Layout 
          onToggleTheme={handleToogleTheme}
          selectedTheme={theme}
        />
      </ThemeProvider>
    </>
  );
};

export default App;
