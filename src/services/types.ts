import { Type } from "../interfaces/type.interface";
const { typeModel } = require("../models");

const createType = async (type: Type) => {
  const responseCreate = await typeModel.create(type);

  return responseCreate;
};

const getTypes = async () => {
  const responseTypes = await typeModel.find({});

  return responseTypes;
};

const getDetailType = async (id: string) => {
  const searchById = await typeModel.findById(id);
  return searchById;
};

const deleteTypeDB = async (id: string) => {
  const data = await typeModel.delete({ _id: id });

  return data;
};

const updatePokeType = async (id: string, body: Type) => {
  const searchPoke = await typeModel.findById(id);
  const data = await typeModel.updateOne(
    { _id: id },
    {
      name: body.name ? body.name : searchPoke.name,
    }
  );

  return data;
};

export { createType, getTypes, getDetailType, deleteTypeDB, updatePokeType };
