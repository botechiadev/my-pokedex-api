import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { handlePokemons, handleSignIn } from '../router/coordinator';

export  function SearchClientPage() {

  const navigate = useNavigate();
  return (
    <Stack minH={'95vh'} direction={{ base: 'column', md: 'row' }}
    marginTop={'60px'}
    >
      <Flex p={8} flex={1} align={'center'} justify={'center'} paddingTop={'80px'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.400',
                zIndex: -1,
              }}>
              Pokemons
            </Text>
            <br />{' '}
            <Text color={'blue.400'} as={'span'}>
              TEMOS QUE PEGAR!
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            Esse e o nosso objetivo, <strong>EXPERIMENTE!</strong> E so entrar, se quiser veja os detalhes e CAPTURE pokemons para PREENCHER SUA POKEDEX!
          </Text>
          <Text color={'red.700'} fontWeight={'bolder'}>Em breve NOVAS FUNCIONALIDADES</Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
           {/* <Button
              rounded={'full'}
              onClick={()=>{handleSignIn(navigate)}}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',

              }}>
              LOGUEAR E JOGAR
            </Button>*/}
            <Button rounded={'full'} onClick={()=>{handlePokemons(navigate)}}>
            EXPERIMENTAR  CAPTURAR
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://i.postimg.cc/6qt9v53L/pokre.jpg'
          }
        />
      </Flex>
    </Stack>
  )
}