import express, { Router } from "express";
import { checkAuth } from "../middleware/checkAuth.middleware.js";
import { login } from "../controllers/auth.controller.js";

const router: Router = express.Router();

router.post("/login", login);

export default router;
