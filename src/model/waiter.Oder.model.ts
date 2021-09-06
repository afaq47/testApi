import { Schema, model } from 'mongoose';
import { waitersOder } from '../types/document/waiter.oder';
const waitersoderSchema = new Schema(
  {
    IteamName: { type: String },
    Price: { type: Number },
    Desgination: { type: String },
    cell: { type: String },
    JoinDate: { type: String },
    // time:{type:String, default:0},
    // email: {  type: String,required: true },
    // password:{type: String,required: true},
    // acceptorpanding:{type:String, default:"Panding"},
    // totalBill:{type:String}
    
   
  },
  { timestamps: true }
);
export const waitersOderSchema = model<waitersOder>('waitersOderSchema', waitersoderSchema);