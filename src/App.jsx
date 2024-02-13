import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import  {PokedexProvider}  from './common/context/Context';
import { AppRouter } from './router/AppRouter';
import {GlobalStyled} from './theme/globalStyled';
import { NavbarComponent } from './components/Navbar/NavbarComponent';
import './theme/normalize.css'


export function App() {
  
  
  return ( 

  <ChakraProvider>   
  <PokedexProvider>
    <div className='App'>
    <GlobalStyled/>  
    <NavbarComponent/>
      <AppRouter/>     
      </div>
  </PokedexProvider>  
  </ChakraProvider>
);
}

