import { Pokemon } from "../interfaces/pokemon.interface";
import { Type } from "../interfaces/type.interface";
const { pokemonModel } = require("../models");

const createPoke = async (poke: Pokemon) => {
  const responseCreate = await pokemonModel.create(poke);

  return responseCreate;
};

const getPokemons = async () => {
  const responsePokes = await pokemonModel.find({}).populate("types");

  const orderPokes = (a: Pokemon, b: Pokemon) => {
    if (a.pokedexId > b.pokedexId) {
      return 1;
    }
    if (b.pokedexId > a.pokedexId) {
      return -1;
    }
    return 0;
  };
  const sortPokes = responsePokes.sort(orderPokes);
  return sortPokes;
};

const getDetailPoke = async (id: string | number) => {
  if (typeof id === "string" && id.length > 6) {
    const result = await pokemonModel.findById(id).populate("types");
    return result;
  } else {
    const searchPokedexId = await pokemonModel.findOne({
      pokedexId: id,
    });
    return searchPokedexId;
  }
};

const deletePokeDB = async (id: string) => {
  const data = await pokemonModel.delete({ _id: id });

  return data;
};

const updatePokeDB = async (id: string, body: Pokemon) => {
  const searchPoke = await pokemonModel.findById(id);
  const data = await pokemonModel.updateOne(
    { _id: id },
    {
      name: body.name ? body.name : searchPoke.name,
      hp: body.hp ? body.hp : searchPoke.hp,
      attack: body.attack ? body.attack : searchPoke.attack,
      defense: body.defense ? body.defense : searchPoke.defense,
      speed: body.speed ? body.speed : searchPoke.speed,
      height: body.height ? body.height : searchPoke.height,
      weight: body.weight ? body.weight : searchPoke.weight,
      image: body.image ? body.image : searchPoke.image,
      types: body.types ? body.types : searchPoke.types,
      custom: body.custom ? body.custom : searchPoke.custom,
    }
  );

  return data;
};

export { createPoke, getPokemons, getDetailPoke, deletePokeDB, updatePokeDB };
