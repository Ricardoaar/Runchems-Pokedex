import React from "react";

const translateType = (type) => {
  let typePoke;
  switch (type) {
    case "steel"    :
      typePoke = "Acero";
      break;
    case "water"    :
      typePoke = "Agua";
      break;
    case "bug"      :
      typePoke = "Bicho";
      break;
    case "dragon"   :
      typePoke = "Dragón";
      break;
    case "electric" :
      typePoke = "Eléctrico";
      break;
    case "ghost"    :
      typePoke = "Fantasma";
      break;
    case "fire"     :
      typePoke = "Fuego";
      break;
    case "fairy"    :
      typePoke = "Hada";
      break;
    case "ice"      :
      typePoke = "Hielo";
      break;
    case "fighting" :
      typePoke = "Lucha";
      break;
    case "normal"   :
      typePoke = "Normal";
      break;
    case "grass"    :
      typePoke = "Planta";
      break;
    case "psychic"  :
      typePoke = "Psíquico";
      break;
    case "rock"     :
      typePoke = "Roca";
      break;
    case "dark"     :
      typePoke = "Siniestro";
      break;
    case "ground"   :
      typePoke = "Tierra";
      break;
    case "poison"   :
      typePoke = "Veneno";
      break;
    case "flying"   :
      typePoke = "Volador";
      break;
    default:
      typePoke = "";
  }

  return typePoke;

};
const PokemonTypes = ({ types }) => {
  if (!types) return <></>;
  const primaryType = translateType(types[0].type.name);
  const secondaryType = types[1] && translateType(types[1].type.name);
  return <div className="all-types">{secondaryType ?
    <>
      <p className="types-esp">{primaryType}</p>
      <p className="types-esp">{secondaryType}</p>
    </>
    : <p className="types-esp">{primaryType}</p>}</div>;
};

export default PokemonTypes;
