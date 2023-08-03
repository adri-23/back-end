import pruebacontroller from "../controllers/prueba.controller.js";
import express from "express";
const router = express.Router();
router.post("/edgar", pruebacontroller.holaMundo);

export default router;
