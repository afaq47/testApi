import { ADMINwaitersSchema } from '../model/Admin.model.waiter';
import { waitersOderSchema } from '../model/waiter.Oder.model';
import { ADMINwaiter } from '../types/document/admin.waiter';
export class MainAdminWaiter {
  constructor() {}
  getAdmin(_id: string) {
    return ADMINwaitersSchema.findById(_id);
  }
  saveAdmin(ADMin: ADMINwaiter) {
    return new ADMINwaitersSchema(ADMin).save();
  }
  updateAdmin(Admmin: ADMINwaiter) {
    return ADMINwaitersSchema.findByIdAndUpdate(Admmin._id, Admmin, {
      new: true
    });
  }
  deletAdmin(_id: string) {
    return ADMINwaitersSchema.findByIdAndDelete(_id);
  }
  getAdminslist() {
   return ADMINwaitersSchema.find();
  }


}