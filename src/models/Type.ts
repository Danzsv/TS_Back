const { Schema, Types, model, Model } = require("mongoose");
const mongooseDelete = require("mongoose-delete");

// import { Type } from "../interfaces/type.interface";

const TypeSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
TypeSchema.plugin(mongooseDelete, { overrideMethods: "all" });

const TypeModel = model("Type", TypeSchema);

module.exports = TypeModel;
