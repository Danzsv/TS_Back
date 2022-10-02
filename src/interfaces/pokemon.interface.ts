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
  types: Array<string>;
  custom: boolean;
}
