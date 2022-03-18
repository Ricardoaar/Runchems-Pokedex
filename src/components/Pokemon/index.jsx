import React from "react";
import pokemonImg from "@img/poke.png";
import PokemonTypes from "@components/Pokemon/PokemonTypes";

const Pokemon = ({ pokemon, setType = null }) => {

  const [pokemonData, setPokemonData] = React.useState({});
  const [pokeImg, setPokeImg] = React.useState("");
  React.useEffect(() => {
    fetch(pokemon.url)
    .then((res) => res.json())
    .then((data) => {
      setPokemonData(data);
      setPokeImg(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${data.id}.png`);
      if (setType) { setType(data.types[0].type.name);}
    });
  }, [pokemon]);

  if (!pokemonData.name) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="card">
        <div className={`face face1 type-${pokemonData && pokemonData.types[0].type.name}`}>
          <img src={pokemonImg} className="face1-img" alt={`Pokemon Image ${pokemonData.name}`}/>
          <p className="num">#{pokemonData.id > 1000 ? (pokemonData.id - 9000) : pokemonData.id}</p>
          <div className="content">
            <img className="img-poke" src={pokeImg} alt="pokemon"/>
            <h3 className="name-poke">
              {pokemonData.name.slice(0, 1).toUpperCase() + pokemonData.name.slice(1)}
            </h3>
          </div>
          <PokemonTypes types={pokemonData.types}/>

        </div>
        <div className={`face  face2 type-${pokemonData && pokemonData.types[0].type.name} `}>
          <div className="content">
            <div className="stat-xp">
              <p className="stat-tittle">Experiencia</p>
              <p className="xp">{pokemonData.base_experience}</p>
            </div>
            <div className="stats-column">
              <div className="stat">
                <p className="stat-tittle ">HP</p>
                <p className="cant">{pokemonData.stats[0].base_stat}</p>
              </div>
              <div className="stat">
                <p className="stat-tittle">Ataque</p>
                <p className="cant">{pokemonData.stats[1].base_stat}</p>
              </div>
              <div className="stat">
                <p className="stat-tittle">Defensa</p>
                <p className="cant">{pokemonData.stats[2].base_stat}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Pokemon;
