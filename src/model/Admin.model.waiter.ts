import { Schema, model } from 'mongoose';
import { ADMINwaiter } from '../types/document/admin.waiter';
const ADMINwaiterSchema = new Schema(
  {
    FirstName: { type: String },
    LastName: { type: String },
    Desgination: { type: String },
    cell: { type: String },
    JoinDate: { type: String },
    adress: { type: String },
  },
  { timestamps: true }
);
export const ADMINwaitersSchema = model<ADMINwaiter>('ADMINwaiterSchema', ADMINwaiterSchema);