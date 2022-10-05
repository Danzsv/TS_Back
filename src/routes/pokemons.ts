import { Router } from "express";
import {
  createPokemon,
  deletePokemon,
  getAllPokemons,
  getPokemon,
  updatePokemon,
} from "../controllers/pokemon";

const router = Router();

router.get("/", getAllPokemons);
router.get("/:id", getPokemon);
router.put("/:id", updatePokemon);
router.delete("/:id", deletePokemon);
router.post("/", createPokemon);

export { router };
