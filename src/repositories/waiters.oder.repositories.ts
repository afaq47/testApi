import { waitersOderSchema } from '../model/waiter.Oder.model';
import { waitersOder } from '../types/document/waiter.oder';
export class waitersOderAdmin {
  constructor() {}
  getAdmin(_id: string) {
    return waitersOderSchema.findById(_id);
  }
  saveAdmin(ADMin: any) {
    return new waitersOderSchema(ADMin).save();
  }
  updateAdmin(Admmin: waitersOder) {
    return waitersOderSchema.findByIdAndUpdate(Admmin._id, Admmin, {
      new: true
    });
  }
  deletAdmin(_id: string) {
    return waitersOderSchema.findByIdAndDelete(_id);
  }
  gettAdminslist() {
   return waitersOderSchema.find();
  }
  getoder(id:string){
    return waitersOderSchema.findById(id);
  }

}