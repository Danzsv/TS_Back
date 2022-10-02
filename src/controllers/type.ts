import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";

const getType = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, "ERROR_GET_TYPE");
  }
};

const getAllType = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, "ERROR_GET_ALL_TYPE");
  }
};

const updateType = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, "ERROR_UPDATE_TYPE");
  }
};

const createType = ({ body }: Request, res: Response) => {
  try {
    res.send(body);
  } catch (error) {
    handleHttp(res, "ERROR_CREATE_TYPE");
  }
};

const deleteType = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, "ERROR_DELETE_TYPE");
  }
};

export { getType, getAllType, createType, deleteType, updateType };
