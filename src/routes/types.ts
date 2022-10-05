import { Router } from "express";

const router = Router();

import {
  getAllType,
  getType,
  updateType,
  deleteType,
  createTypes,
} from "../controllers/type";

router.get("/", getAllType);
router.get("/:id", getType);
router.put("/:id", updateType);
router.delete("/:id", deleteType);
router.post("/", createTypes);

export { router };
