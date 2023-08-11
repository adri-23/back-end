import invitacionCtrl from "../controllers/invitacion.controller.js";
import express from "express";
const router = express.Router();

router.get("/invitaciones", invitacionCtrl.getAllInvitacion);
router.get("/invitaciones/:id", invitacionCtrl.getInvitacionById);
router.post("/invitacion", invitacionCtrl.createInvitacion);
router.put("/invitacion/:id", invitacionCtrl.updateInvitacion);
router.delete("/invitacion/:id", invitacionCtrl.deleteInvitacion);

export default router;
