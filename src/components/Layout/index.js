import React, { useEffect } from 'react';

import Header from '../Header';
import PostsList from '../PostsList';
import Footer from '../Footer';

export default function Layout({onToggleTheme,selectedTheme }) {

  // useEffect(()=>{
  //   console.debug('useEffect dentro do <Layout />')
  // },[selectedTheme])

  // useEffect(()=>{
  //   console.debug({selectedTheme});

  //   // através dessa função de retorno eu consigo saber quando o componente for desmontado da tela, tirado
  //   return() => {
  //     console.debug('<Layout /> saiu da tela')
  //   }
  // },[selectedTheme])

  useEffect(()=>{
    // document.addEventListener('scroll', ()=>{
    //   console.debug('scrollou')
    // })
    function handleScroll(){
      console.debug('scrollou')
    }

    document.addEventListener('scroll', handleScroll);

    //  remove o event quando o componente é desmontado da tela
    return () => document.removeEventListener('scroll', handleScroll)
  },[])
  return (
    <>
      <Header onToggleTheme={onToggleTheme} selectedTheme={selectedTheme}/>
      <PostsList />
      <Footer onToggleTheme={onToggleTheme} selectedTheme={selectedTheme}/>
    </>
  );
}
