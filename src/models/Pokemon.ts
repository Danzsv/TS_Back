const { Schema, Types, model, Model } = require("mongoose");
// import { Pokemon } from "../interfaces/pokemon.interface";
const mongooseDelete = require("mongoose-delete");

const PokemonSchema = new Schema(
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

PokemonSchema.plugin(mongooseDelete, { overrideMethods: "all" });
const PokemonModel = model("Pokemon", PokemonSchema);

module.exports = PokemonModel;

export {};
