import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import {
  createType,
  getTypes,
  getDetailType,
  deleteTypeDB,
  updatePokeType,
} from "../services/types";
const getType = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await getDetailType(id);
    res.send(response);
  } catch (error) {
    handleHttp(res, "ERROR_GET_TYPE");
  }
};

const getAllType = async (req: Request, res: Response) => {
  try {
    const response = await getTypes();
    res.send(response);
  } catch (error) {
    handleHttp(res, "ERROR_GET_ALL_TYPE");
  }
};

const updateType = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { body } = req.body;
    const response = await updatePokeType(id, body);
    res.send(response);
  } catch (error) {
    handleHttp(res, "ERROR_UPDATE_TYPE");
  }
};

const createTypes = async ({ body }: Request, res: Response) => {
  try {
    const response = await createType(body);
    res.send(response);
  } catch (error) {
    handleHttp(res, "ERROR_CREATE_TYPE");
  }
};

const deleteType = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await deleteTypeDB(id);
    res.send(response);
  } catch (error) {
    handleHttp(res, "ERROR_DELETE_TYPE");
  }
};

export { getType, getAllType, createTypes, deleteType, updateType };
