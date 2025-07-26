import { Request, Response } from "express";

export const socket = async (req: Request, res: Response) => {
	
	return res.status(200).json({
		message: "DONE",
	});
};
