import { Pokemon } from "../interfaces/pokemon.interface";
import { Type } from "../interfaces/type.interface";
import { PopulatePoke } from "../interfaces/populatedPoke.interface";
const { pokemonModel } = require("../models");

const createPoke = async (poke: Pokemon) => {
  const responseCreate = await pokemonModel.create(poke);

  return responseCreate;
};

const getPokemons = async () => {
  const responsePokes = await pokemonModel.find({}).populate("types");

  const orderPokes = (a: any, b: any) => {
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
export { createPoke, getPokemons, getDetailPoke };
