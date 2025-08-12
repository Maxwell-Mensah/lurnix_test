import mongoose, { Schema, Document } from 'mongoose';

interface IStartup extends Document {
  name: string;
  founder: string;
  description: string;
  yearCreated: number;
  createdAt: Date;
}

const StartupSchema: Schema = new Schema({
  name: { type: String, required: true },
  founder: { type: String, required: true },
  description: { type: String, required: true },
  yearCreated: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<IStartup>('Startup', StartupSchema);
