import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { prismaClient } from "../lib/connectDb.js";
import { jsonwebtoken } from "../lib/jsonwebtoken.lib.js";

export const login = async (req: Request, res: Response) => {
	const { email, password } = req.body;
	if (!email || !password)
		return res.status(400).json({ message: "Bad Request" });

	try {
		const user = await prismaClient.user.findUnique({
			where: {
				email,
			},
		});
		if (!user) return res.status(401).json({ message: "Unauthorized" });
		// console.log(user);
		const isMatch = await bcrypt.compare(password, user.password as string);
		if (!isMatch) return res.status(401).json({ message: "Unauthorized" });

		jsonwebtoken.generateToken(user.id, res);
		return res.status(200).json({
			message: "DONE",
		});
	} catch (error) {
		console.error(error);

		// Error message extract karna
		let errorMessage = "Unknown error";

		if (error instanceof Error) {
			errorMessage = error.message;
		} else if (typeof error === "string") {
			errorMessage = error;
		}

		return res.status(500).json({
			message: "Something went wrong",
			error: errorMessage,
		});
	}
};
