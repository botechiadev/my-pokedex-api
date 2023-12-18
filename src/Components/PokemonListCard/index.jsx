import React from 'react' 
import {useEffect, useContext, useState} from "react"
import { PokedexContext } from './../../globals/Context'
import { Link, useParams, useNavigate } from "react-router-dom"
import axios from  'axios'
import { DivContainer } from "./styled"
      import {
        Heading,
    WrapItem, 
        Box,
        Center,
        Image,
        Flex,
        Text,
        Stack,
        Button,
        useColorModeValue,
        Badge,
        Select,
        Container,
      } from '@chakra-ui/react';
      
export function PokemonList(){
  const URL_API = "https://pokeapi.co/api/v2";
  const [pokemons, setPokemons] = useState([]);
  const [next, setNext] = useState("");
  const [previous, setPrevious] = useState("");
  const [pokedexList, setPokedexList] = useState([])
  const {addToPokedex, deletePokemon , pokedex}=useContext(PokedexContext)
  const handleNext = (url) => {
    requestPokemon(next);
  };
console.log(pokedex)
  const handlePrevious = (url) => {
    requestPokemon(previous);
  };
  const requestPokemon = async (url) => {
    const response = await axios.get(url);
    setNext(response.data.next);
    setPrevious(response.data.previous);
    Promise.all(
      response.data.results.map((pokemon) => axios.get(pokemon.url))
    ).then((data) => {
      setPokemons(data);
    });
  }; 
  (   
      <>
      <Container w={'100%'}>


<WrapItem>
  <Button colorScheme='red' shadow={`var(--shadow-ArrowBtn)`}
navigate='-1'> 
  Anterior
   </Button>
</WrapItem>
<WrapItem>
  <Box bg='var(--white-default)' width={'7rem'} height={'2.3rem'} shadow={`var(--shadow-ArrowBtn)`}
  textAlign={'center'} padding={'1.4'}
  >

{currentPage}
  </Box>
</WrapItem>
<WrapItem>

<button>next</button>
</WrapItem>
<span>
<Select placeholder='Selecione 1 Categoria'>
  <option value='0'>TODOS</option>
  <option value='1'>NORMAL</option>
  <option value='2'>FIGHTING</option>
  <option value='3'>FLYING</option>
  <option value='4'>ROCK</option>
  <option value='5'>DARK</option>
  <option value='6'>FIRE</option>
  <option value='7'>GRASS</option>
  <option value='8'>POISON</option>
  <option value='9'>ELECTRIC</option>
  <option value='10'>PSYCHIC</option>
  <option value='11'>GHOST</option>
  <option value='12'>STEEL</option>
  <option value='13'>WATER</option>
  <option value='14'>POISON</option>
  <option value='15'>PSYCHIC</option>
  <option value='16'>GHOST</option>
  <option value='17'>WATER</option>
  <option value='18'>ICE</option>
  <option value='19'>GROUND</option>
  <option value='20'>BUG</option>
</Select>
</span>
      </Container>
      <DivContainer py={4}>
      <button onClick={() => handlePrevious()}>previous</button>
      <button onClick={() => handleNext()}>next</button>
        {pokemons.map(pokemon=>(
      
      <Center py={3}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: '100%', md: '440px' }}
        height={{ sm: '100%', md: '220px' }}
        direction={{ base: 'column', md: 'row' }}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        padding={4}>
        <Flex flex={1} bg="black" rounded='md'>
          <Image
            objectFit="contain"
            boxSize="100%"
            boxShadow='dark-lg' p='6' rounded='md'
         src={pokemon.data.sprites.other['dream_world']['front_default']} alt="pokemon img"
      
          />
        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="space-around"
          alignItems="center"
          p={2}
          pt={2}>
          <Heading fontSize={'2xl'} fontFamily={'body'}  color={'gray.900'}>
            {pokemon.data.name.toUpperCase()}
          </Heading>
          <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
           id National POKEDEX #{pokemon.data.id}
          </Text>
        
          <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
          
{...pokemon.data.types.map(item=>(
<Badge
              px={3}
              py={1.5}
              color={'var(--white-default)'}
              bg={useColorModeValue(`var(--badge-${(item.type.name.toUpperCase())})`)}
              fontWeight={'700'}
              rounded='2xl'
              boxShadow={`var(--shadow-arrowBTN)`}
              >
            {item.type.name}
  </Badge> ))}
          </Stack>
      
          <Stack
            width={'100%'}
            mt={'2rem'}
            direction={'row'}
            padding={2}
            justifyContent={'space-between'}
            alignItems={'center'}>
            <button
              onClick={()=> addToPokedex(pokemon)}
             >
             Capturar
            </button>
            
          <Link to={'/pokemon/' + pokemon.data.name}
              color={'black'}
                dataPokemon = {pokemon}
              >
            +INFO
      
        </Link>
    
          </Stack>
        </Stack>
      </Stack>
      </Center>

      
        
      ))}
     
          </DivContainer>
     </>
      )
      }