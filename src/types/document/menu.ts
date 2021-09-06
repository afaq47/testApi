import { Document } from 'mongoose';
export interface menuadmindoc extends Document {
  Iteam_id:string;
  IteamName: string;
  Price: number;
  createdAt?: string;
  updatedAt?: string;
}