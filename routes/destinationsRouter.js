import express from "express";
import {
  createCountry,
  deleteCountry,
  getCountries,
  getCountryByCode,
  updateCountry,
} from "../controllers/destinationsControllers.js";
import {
  checkBeforeCreate,
  checkCountryExists,
} from "../middleware/destinationMiddleware.js";

const router = express.Router();

router.get("/", getCountries);
router.post("/", checkBeforeCreate, createCountry);
router.get("/:code", checkCountryExists, getCountryByCode);
router.put("/:code", checkCountryExists, updateCountry);
router.delete("/:code", checkCountryExists, deleteCountry);

export default router;
