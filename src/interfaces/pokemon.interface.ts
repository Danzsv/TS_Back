import { Types } from "mongoose";
import { Type } from "./type.interface";
export interface Pokemon {
  pokedexId: number;
  name: string;
  hp: number;
  attack: number;
  defense: number;
  speed: number;
  height: number;
  weight: number;
  image: string;
  // types: Array<string>;
  types: [Types.ObjectId];
  // types: [PopulatedDoc<Document<ObjectId> & Type>];
  custom: boolean;
}
