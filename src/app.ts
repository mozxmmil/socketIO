import express from "express";
import http from "http";
import { Server } from "socket.io";
const app = express();
const server = http.createServer(app);
import dotenv from "dotenv";
dotenv.config();

const io = new Server(server, {
	cors: {
		origin: process.env.FRONTEND_URL,
		methods: ["GET", "POST"],
	},
});
console.log("hello");
console.log(process.env.PORT);
const port = process.env.PORT || 3002;

io.on("connection", (soket) => {
	console.log("soket io connected");
	console.log(soket.id);
	soket.emit("message", "Hello World!");
});
// const io = httpServer(serve0r);

// app.use("/*", soketIo);

server.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
