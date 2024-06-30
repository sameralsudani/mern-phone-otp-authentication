import { Router } from "express";
import {
  getLoggedInUser,
  login,
  logOutUser,
  resendOtp,
  sendOtp,
  verifyOtpAndRegister,
} from "../controllers/userController";
import { isJwtAuthTokenExist } from "../middleware/isJwtAuthTokenExist";
import { isOtpTokenExist } from "../middleware/isOtpTokenExist";
const route: Router = Router();

// register route
route.post("/register/sendotp", sendOtp);
route.post("/verify/register", isOtpTokenExist, verifyOtpAndRegister, login);
route.post("/resentotp", isOtpTokenExist, resendOtp);

// login route
route.post("/login", login);
route.get("/getloggeduser", isJwtAuthTokenExist, getLoggedInUser);
route.get("/logout", logOutUser);

export default route;
