import express from "express";
import { getIndexHTML } from "../controllers/viewsController.js";

const router = express.Router();

router.get("/", getIndexHTML);

export default router;
