import express from "express";
import http from "http";
import { Server } from "socket.io";
import dotenv from "dotenv";
import soketRoute from "./routes/soket.route.js";
// import { connectDb } from "./lib/connectDb.js";
import messageRoute from "./routes/message.route.js";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.route.js";

dotenv.config();

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 3002;
app.use(express.json());
app.use(cookieParser());
app.use("/api/socket", soketRoute);
app.use("/api/message", messageRoute);
app.use("/api/auth", authRoute);

const io = new Server(server, {
	cors: {
		origin: process.env.FRONTEND_URL,
		methods: ["GET", "POST"],
		credentials: true,
	},
});

io.on("connection", (soket) => {
	soket.on("message", (message) => {
		console.log(message);
		io.emit("server-message", message);
	});
	soket.on("dissconnect", (message) => console.log(message));
});

server.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
