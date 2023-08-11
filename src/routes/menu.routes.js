import menuCtrl from "../controllers/menu.controller.js";
import md_auth from "../middleware/authenticated.js";
import express from "express";

const router = express.Router();
router.get("/menu/:ID_PROYECTO", md_auth.ensureAuth, menuCtrl.getMenu);
router.get(
  "/menuUsuario/:ID_USUARIO",
  md_auth.ensureAuth,
  menuCtrl.getMenuUser
);
router.post("/menuUsuario", md_auth.ensureAuth, menuCtrl.inDetalleMenu);

export default router;
