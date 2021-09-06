import { Document } from 'mongoose';
export interface waitersOder extends Document {
  Iteam_id:string;
    IteamName: string;
    Price: number;
  Desgination: string;
  cell: string;
  email: string;
  password:string;
  createdAt?: string;
  updatedAt?: string;
 
  
}