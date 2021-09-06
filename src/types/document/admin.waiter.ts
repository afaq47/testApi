import { Document } from 'mongoose';
export interface ADMINwaiter extends Document {
  _id:string;
  FirstName: string;
  LastName: string;
  Desgination: string;
  cell: string;
  JoinDate: string;
  adress: string;
  createdAt?: string;
  updatedAt?: string;
}