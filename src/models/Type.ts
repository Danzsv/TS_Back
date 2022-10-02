import { Schema, Types, model, Model } from "mongoose";
import { Type } from "../interfaces/type.interface";

const TypeSchema: Schema = new Schema<Type>(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const TypeModel = model("Type", TypeSchema);

export default TypeModel;
