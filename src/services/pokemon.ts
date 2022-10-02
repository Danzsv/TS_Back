import { Pokemon } from "../interfaces/pokemon.interface";
import { Type } from "../interfaces/type.interface";
import { PopulatePoke } from "../interfaces/populatedPoke.interface";
import PokemonModel from "../models/Pokemon";

const createPoke = async (poke: Pokemon) => {
  const responseCreate = await PokemonModel.create(poke);

  return responseCreate;
};

const getPokemons = async () => {
  const responsePokes = await PokemonModel.find({})
    .populate<Pick<PopulatePoke, "types">>("types")
    .orFail()
    .then((doc) => console.log(doc));
  console.log(responsePokes);

  // const orderPokes = (a: any, b: any) => {
  //   if (a.pokedexId > b.pokedexId) {
  //     return 1;
  //   }
  //   if (b.pokedexId > a.pokedexId) {
  //     return -1;
  //   }
  //   return 0;
  // };
  // const sortPokes = responsePokes.sort(orderPokes);
  // return sortPokes;
};

const getDetailPoke = async (id: string | number) => {
  if (typeof id === "string" && id.length > 6) {
    const result = await PokemonModel.findById(id);
    return result;
  } else {
    const searchPokedexId = await PokemonModel.findOne({
      pokedexId: id,
    });
    return searchPokedexId;
  }
};
export { createPoke, getPokemons, getDetailPoke };
