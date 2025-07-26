import { User } from "@prisma/client";
import { Request, Response } from "express";
import { errorHandler } from "../lib/error.handler.lib.js";
import { prismaClient } from "../lib/connectDb.js";
export const getMessages = async (req: Request, res: Response) => {
	const { id: receiverId } = req.params;
	const { id: senderId } = req.user as User;
	const { text, image } = req.body;
	if (!receiverId) return res.status(400).json({ message: "Bad Request" });

	try {
		const messages = await prismaClient.messsages.create({
			data: {
				senderId,
				receiverId,
				message: text,
				image,
			},
		});
		console.log(messages);
		return res.status(200).json({
			message: "DONE",
		});
	} catch (error) {
		errorHandler(error as Error | string, res);
	}
};
