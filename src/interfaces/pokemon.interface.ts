import { Types } from "mongoose";

export interface Pokemon {
  name: string;
  pokedexId: number;
  hp: number;
  attack: number;
  defense: number;
  speed: number;
  height: number;
  weight: number;
  image: string;
  types: string[];
  // types: [Types.ObjectId];

  custom: boolean;
}
