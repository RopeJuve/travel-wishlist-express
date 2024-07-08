import express from "express";
import { getIndexHTML,getDestinationHTML } from "../controllers/viewsController.js";

const router = express.Router();

router.get("/", getIndexHTML);
router.get('/destination/:code',getDestinationHTML)

export default router;
