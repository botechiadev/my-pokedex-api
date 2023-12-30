import { useEffect, useContext, useState } from "react";
import Swal from 'sweetalert2';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Badge, Box, Button, Flex, Input, TagLabel } from '@chakra-ui/react';
import axios from "axios";

import { PokedexContext } from '../../globals/Context';
import { ContainerGame } from "../../Components/DisplayGame/styled";
import bgSearch from './../../assets/bg/bgSearch.png';
import { PokemonsContext } from "../../common/context/pokemons-context";

const ContainerPokeList = styled.main`
  padding: 110px 1rem;
`;

const PokeCard1 = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 30%;
  min-width: 264px;
  height: 200px;
  background-color: #f6f8ff;
  box-shadow: #575757 2px 2px 2px 0px;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  align-items: flex-start;
  justify-content: space-around;
  align-self: center;
  padding-top: 6rem;
  border-radius: 25px;
  margin-bottom: 30px;
  margin-top: 120px;
  padding-left: 2rem;

  div > img {
    position: relative;
    top: -150px;
    right: -150px;
    min-height: 210px;
    width: 124px;
    object-fit: contain;
    z-index: 1;
  }

  h2 {
    font-size: 1.2rem;
  }
`;

const ButtonNav4 = styled.button`
  position: fixed;
  z-index: 11;
  top: 20px;
  right: 10%;
  background: #f3ff14;
  height: 40px;
  padding: 0.2rem 1rem;
  border: 3px solid black;
  border-radius: 14px;
`;

const TitleCard = styled.h2`
  font-size: 3rem;
`;

  export function PokemonsHome() {
    const {
      pokedex , 
      addToPokedex, 
      pokemons,
      handleNext,
      handlePrevious
    } = useContext(PokemonsContext
      
      )
    

  return (
    <ContainerPokeList>
      <ButtonNav4>
        <Link to={'/pokedex'}>MyPokedex</Link>
      </ButtonNav4>
      <Box w={'100%'} bg={'darkblue'}>
        <Flex w={'100%'} bgSize={'cover'} bgPosition={' right top'} bgImage={bgSearch} h={'450PX'} alignContent={'center'} alignSelf={'flex-end'} padding={'1rem'}>
          <form>
          
            <Input type={'text'} bg={'white'} id={'searchName'} name={'searchName'} />
          </form>
        </Flex>
      </Box>
      <Flex flexFlow={'row wrap'} justifyContent={'space-around'}>
        {pokemons.map((pokemon, indice) => {
          const isPokemonInPokedex = pokedex.find((poke) => poke.data.name === pokemon.data.name);
          return isPokemonInPokedex ? null : (
            <PokeCard1 key={indice}>
              <div>
                <h2>{pokemon.data.name.toUpperCase()}</h2>
                <Box>
                  {pokemon.data.types.map(typeName => (
                    <Badge key={typeName.type.name} style={{ "background": `var(--badge-${typeName.type.name.toUpperCase()})` }}>
                      {typeName.type.name}
                    </Badge>
                  ))}
                </Box>
                <Flex>
                  <img src={pokemon.data.sprites.other['dream_world']['front_default']} alt={"pokemon img"} />
                </Flex>
              </div>
              <Box justifyContent={'flex-end'} marginLeft={'-210px'}>
                <Flex alignSelf={'flex-end'}>
                  <Button
                    onClick={() => {
                      addToPokedex(pokemon);
                      Swal.fire({
                        title: `${pokemon.data.name.toUpperCase()} CAPTURADO!`,
                        text: 'Pokemon guardado em pokedex',
                        imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FpTceTTU3ueXmM%2Fgiphy.gif&f=1&nofb=1&ipt=aedbdb3dac2c2c456d2ce8f7a48b100447a2f2625f7dd586cfc8305e672a6dfb&ipo=images',
                        imageWidth: 400,
                        imageHeight: 200,
                        imageAlt: 'Pokemon',
                      });
                  
                    }}
                  >
                    CAPTURAR
                  </Button>
                  <Link to={`/pokemon/${pokemon.data.name}`}>+INFO</Link>
                </Flex>
              </Box>
            </PokeCard1>
          );
        })}
      </Flex>
      <Button onClick={handlePrevious} bg={'red.300'}> PAGINA ANTERIOR</Button>
      <Button onClick={handleNext} bg={'green.300'}>PROXIMA PAGINA</Button>
    </ContainerPokeList>
  );
}
