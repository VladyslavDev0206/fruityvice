import express from "express";
import {getFruits, addFavorite, removeFavorite, getFavorites} from "../controllers/Fruits.js";

const router = express.Router();

router.get('/fruits', getFruits);
router.post('/addFavorite', addFavorite);
router.post('/removeFromFavorite', removeFavorite);
router.get('/favoriteFruits', getFavorites);

export default router;