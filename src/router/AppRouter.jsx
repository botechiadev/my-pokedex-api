import React from 'react'
import {useState, useEffect} from 'react'
import {  BrowserRouter, Routes, Route} from 'react-router-dom'
import { PokemonsHome } from '../Pages/PokemonsHomePage/PokemonsHome'
import {PokedexPage} from '../Pages/PokedexPage/PokedexPage'
import { GamePage } from '../pages/GamePage'
import { SearchClientPage } from '../pages/SearchClientPage'
import { BattlePage } from '../pages/BattlePage'
import { Container, Flex } from '@chakra-ui/react'
import { DetailsPokePage } from '../Pages/DetailsPoke/DetailsPokePage'
export function AppRouter() {

  return (
    <Flex>
    <BrowserRouter>
   
         <Routes>
      <Route path="/" element={<SearchClientPage/>}/>
    <Route path="/pokemons" element={<PokemonsHome />}/>
    <Route path="/pokemons/:pokeName" element={<DetailsPokePage/>} />    
    <Route path="/pokedex" element={<PokedexPage/>} />
    <Route path="/pokedex/game" element={<GamePage/>} />
    <Route path="/battle" element={<BattlePage/>} />
 </Routes>    
    </BrowserRouter>
 </Flex>
  )
}