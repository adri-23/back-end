import userCtrl from '../controllers/user.controller.js';
import md_auth from "../middleware/authenticated.js";
import express from 'express';
import validator from '../middleware/validator.js';
const router = express.Router();
router.post('/login',validator.ensureValidate, userCtrl.login);
// router.post('/manageUserMenu', userCtrl.postMenuUser);
// router.post('/manageUserCajero',userCtrl.postCajeroUser);
// router.post('/users',md_auth.ensureAuth, userCtrl.users);
router.post('/user',validator.ensureValidate,userCtrl.insert);
router.post('/users/validity',userCtrl.validity);


//anexos

export default router;