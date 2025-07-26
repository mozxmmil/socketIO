import mongoose, { Document, ObjectId } from "mongoose";

export interface messageInterface extends Document {
	senderId: ObjectId;
	receiverId: ObjectId;
	text: string;
	image: string;
	createdAt: Date;
}

const messageSchema = new mongoose.Schema<messageInterface>(
	{
		senderId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		receiverId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		text: String,
		image: String,
	},
	{ timestamps: true }
);

export const Message = mongoose.model<messageInterface>(
	"Message",
	messageSchema
);
