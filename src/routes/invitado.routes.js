import invitadoCtrl from "../controllers/invitado.controller.js";
import express from "express";
const router = express.Router();

router.get("/invitado", invitadoCtrl.getAllInvitados);
router.get("/invitado/:id", invitadoCtrl.getInvitadoById);
router.post("/invitado", invitadoCtrl.createInvitado);
router.put("/invitado/:id", invitadoCtrl.updateInvitado);
router.delete("/invitado/:id", invitadoCtrl.deleteInvitado);

export default router;
