export function handleHome(navigate){
  navigate('/')
}

export function handleSignUp(navigate){
    navigate('/sign-up')
}

export function handleSignIn(navigate){
    navigate('/sign-in')
}

export function handleBattle(navigate){
    navigate('/battle')
}

export function handlePokedex(navigate){
    navigate('/pokedex')
}
export function handleDetails(navigate, pokeName){
    navigate(`/pokemons/${pokeName}`)
}

export function handlePokemons(navigate){
  navigate(`/pokemons`)
}


//{handleHome, handleSignIn, handleSignUp, handleBattle , handlesPokedex, handlePokemons, handleDetails}