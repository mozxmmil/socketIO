import { Request, Response, NextFunction } from "express";
import { jsonwebtoken } from "../lib/jsonwebtoken.lib.js";
import { prismaClient } from "../lib/connectDb.js";

export const checkAuth = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const cookie = req.cookies.token;
	if (!cookie) return res.status(401).json({ message: "Unauthorized" });
	const verifyiedUser = jsonwebtoken.verifyToken(cookie);
	// console.log(verifyiedUser);

	if (!verifyiedUser) return res.status(401).json({ message: "Unauthorized" });
	const user = await prismaClient.user.findUnique({
		where: {
			id: verifyiedUser.payload,
		},
	});
	// console.log(user);
	if (!user) return res.status(401).json({ message: "Unauthorized" });
	req.user = user;

	next();
};
