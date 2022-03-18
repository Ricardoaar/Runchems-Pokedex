import React from "react";
import Pokemon from "@components/Pokemon";
import Header from "@components/Header";
import Footer from "@components/Footer";
import RandomPokemon from "@components/RandomPokemon";

const App = () => {
  const [pokemons, setPokemons] = React.useState([]);
  React.useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon?limit=35`;
    fetch(URL)
    .then(res => res.json())
    .then(data => {
      setPokemons(data.results);
    });
  }, []);

  return (
    <>
      <Header/>
      <RandomPokemon/>
      <div className="pokemon-container">
        {pokemons.length > 0 && pokemons.map(pokemon => (
          <Pokemon key={pokemon.name} pokemon={pokemon}/>
        ))}
      </div>

      <Footer/>
    </>

  );
};

export default App;
