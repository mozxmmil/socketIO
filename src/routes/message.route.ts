import express, { Router } from "express";
import { checkAuth } from "../middleware/checkAuth.middleware.js";
import { getMessages } from "../controllers/message.controller.js";

const router: Router = express.Router();

router.post("/:id", checkAuth, getMessages);

export default router;
