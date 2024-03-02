import { Schema, model, models, Document } from "mongoose";

export interface IQuestion extends Document {
  title: string;
  content: string;
  tags: Schema.Types.ObjectId[];
  views: number;
  upvotes: Schema.Types.ObjectId[];
  downvotes: Schema.Types.ObjectId[];
  author: Schema.Types.ObjectId;
  answers: Schema.Types.ObjectId[];
  createdAt: Date;
}

const QuestionsSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  tags: [{ type: Schema.Types.ObjectId, ref: "Tag" }],
  views: { type: Number, default: 0 },
  upvotes: [{ type: Schema.Types.ObjectId, ref: "User", default: 0 }],
  downvotes: [{ type: Schema.Types.ObjectId, ref: "User" }],
  author: [{ type: Schema.Types.ObjectId, ref: "User", required: true }],
  answers: [{ type: Schema.Types.ObjectId, ref: "Answer", default: 0 }],
  createdAt: { type: Date, default: Date.now },
});

const Question = models.Question || model("Question", QuestionsSchema);

export default Question;