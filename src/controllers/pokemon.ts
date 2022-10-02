import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";

const getPokemon = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, "ERROR_GET_POKEMON");
  }
};

const getAllPokemons = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, "ERROR_GET_ALL_POKEMONS");
  }
};

const updatePokemon = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, "ERROR_UPDATE_POKEMON");
  }
};

const createPokemon = ({ body }: Request, res: Response) => {
  try {
    res.send(body);
  } catch (error) {
    handleHttp(res, "ERROR_CREATE_POKEMON");
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
