import mongoose from "mongoose";
import { PrismaClient } from "@prisma/client";
export const connectDb = async () => {
	try {
		const connect = await mongoose.connect(process.env.MONGO_URI!);
		console.log("MongoDB connected: ", connect.connection.host);
	} catch (error) {
		console.error(error);
	}
};

export const prismaClient = new PrismaClient();
