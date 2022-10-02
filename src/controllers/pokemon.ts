import { Request, Response } from "express";
import { createPoke, getDetailPoke, getPokemons } from "../services/pokemon";
import { handleHttp } from "../utils/error.handle";

const getAllPokemons = async (req: Request, res: Response) => {
  try {
    const response = await getPokemons();
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
