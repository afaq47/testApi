import { Schema, model } from 'mongoose';
import { menuadmindoc } from '../types/document/menu';
const MenuSchemaSchema = new Schema(
  {
    IteamName: { type: String },
    Price: { type: Number },
  },
  { timestamps: true }
);
export const MenuSchema = model<menuadmindoc>('MenuSchemaSchema', MenuSchemaSchema);

