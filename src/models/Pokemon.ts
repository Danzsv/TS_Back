import { Schema, Types, model, Model } from "mongoose";
import { Pokemon } from "../interfaces/pokemon.interface";
// import mongooseDelete from "mongoose-delete";

const PokemonSchema: Schema = new Schema<Pokemon>(
  {
    pokedexId: {
      type: Number,
    },
    name: {
      type: String,
      unique: true,
      required: true,
    },
    hp: {
      type: Number,
      required: true,
    },
    attack: {
      type: Number,
      required: true,
    },
    defense: {
      type: Number,
      required: true,
    },
    speed: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    types: [
      {
        type: Schema.Types.ObjectId,
        ref: "Type",
      },
    ],
    custom: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const PokemonModel = model("Pokemon", PokemonSchema);

export default PokemonModel;
