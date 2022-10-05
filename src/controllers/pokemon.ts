import { Request, RequestHandler, Response } from "express";
import {
  updatePokeDB,
  deletePokeDB,
  createPoke,
  getDetailPoke,
  getPokemons,
} from "../services/pokemon";
import { handleHttp } from "../utils/error.handle";
import { Pokemon } from "../interfaces/pokemon.interface";

const getAllPokemons = async (req: Request, res: Response) => {
  try {
    const name = req.query.name as string;

    const response = await getPokemons();

    if (name) {
      let pokemonName = response.filter((poke: Pokemon) =>
        poke.name.toLowerCase().includes(name.toLowerCase())
      );
      return res.send(pokemonName);
    }
    res.send(response);
  } catch (error) {
    handleHttp(res, "ERROR_GET_ALL_POKEMONS", error);
  }
};
const getPokemon = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const detailPoke = await getDetailPoke(id);
    res.send(detailPoke);
  } catch (error) {
    handleHttp(res, "ERROR_GET_POKEMON", error);
  }
};

const updatePokemon = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { body } = req.body;

    const data = updatePokeDB(id, body);
    return data;
  } catch (error) {
    handleHttp(res, "ERROR_UPDATE_POKEMON");
  }
};

const createPokemon = async ({ body }: Request, res: Response) => {
  try {
    const responsePoke = await createPoke(body);
    res.send(responsePoke);
  } catch (error) {
    handleHttp(res, "ERROR_CREATE_POKEMON", error);
  }
};

const deletePokemon = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = deletePokeDB(id);
    return res.json(data);
  } catch (error) {
    handleHttp(res, "ERROR_DELETE_POKEMON");
  }
};

export {
  getPokemon,
  getAllPokemons,
  updatePokemon,
  createPokemon,
  deletePokemon,
};
