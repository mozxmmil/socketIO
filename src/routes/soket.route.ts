import express, { Router } from "express";
import { socket } from "../controllers/socket.controller.js";

const router: Router = express.Router();

router.get("/connect", socket);

export default router;
