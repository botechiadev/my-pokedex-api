import React from 'react'
import {useState, useEffect} from 'react'
import {   Routes, Route} from 'react-router-dom'
import { PokemonsHome } from '../pages/PokemonsHomePage/PokemonsHome'
import {PokedexPage} from '../pages/PokedexPage/PokedexPage'
import { BattlePage } from '../pages/BattlePage/BattlePage.jsx'
import { Container, Flex } from '@chakra-ui/react'
import { DetailsPokePage } from '../pages/DetailsPoke/DetailsPokePage'
export function AppRouter() {

  return (

   
         <Routes>

    <Route path="/" element={<PokemonsHome />}/>
    <Route path="/pokemon/:pokeName" element={<DetailsPokePage/>} />    
    <Route path="/pokedex" element={<PokedexPage/>} />
    <Route path="/pokedex/battle" element={<BattlePage/>} />
 </Routes>    


  )
}