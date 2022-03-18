import React from "react";
import pokemonImg from "@img/pokeball.png";
import Pokemon from "@components/Pokemon";

const RandomPokemon = () => {
  const [animating, setAnimating] = React.useState(false);
  const [pokemon, setPokemon] = React.useState(null);
  const [type, setType] = React.useState(null);
  const onClick = () => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setAnimating(false);
      let id;
      do {
        id = Math.floor(Math.random() * 1228) + 1;
      } while (id > 900 && id <= 1000);

      if (id > 1000) {
        const lowerThan10 = id % 1000 < 10;
        const lowerThan100 = id % 1000 < 100;

        id = `10${lowerThan10 ? "00" : lowerThan100 ? "0" : ""}${id % 1000}`;
      }
      setPokemon({ "url": `https://pokeapi.co/api/v2/pokemon/${id}/` });
    }, 1410);
  };

  return (
    <div className={`random-pokemon   ${type && `face1 type-${type}`}`}>
      <h1>¿Qué pokemon eres?</h1>
      {pokemon && <Pokemon pokemon={pokemon} setType={setType}/>}
      <img onClick={onClick} className={`${animating && "move"}`} width="64px" src={pokemonImg}
           alt="Pokeball img"/>
    </div>
  );
};

export default RandomPokemon;
