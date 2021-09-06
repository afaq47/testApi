import { ADMINwaiter } from '../types/document/admin.waiter';
import { menuadmindoc } from '../types/document/menu';
import { MainAdminWaiter } from '../repositories/Admin.waiters.repositories';
import { Menurepositories } from '../repositories/menu.repositories';
import CustomeError from '../utills/error';
import { Get, Route, Tags, Post, Body, Path, Put, Delete,Security, SuccessResponse } from "tsoa";
import { SaveUpdateResADMINwaiter } from '../types/Responses/admin.waiter.Responses';
import { SaveUpdateResmenu } from '../types/Responses/menu.responses';
import { DeleteAdminwaiter, GetAdminwaiter, SaveReqADMINwaiter,UpdateReqADMINwaiter } from '../types/Request/admin.waiter.request';
import { Deletemenu, Getmenu, SaveReqmenu,UpdateReqmenu } from '../types/Request/menu.request';
@Route('admin')
@Tags('Admin')
@Security("api_key")
export class AdminwaiterController {
  constructor() { }
 
  @Post("/getWaitersById")
  async getadmin(@Body() getreq:GetAdminwaiter): Promise<SaveUpdateResADMINwaiter> {
    const admin: any = await new MainAdminWaiter().getAdmin(getreq.id);
    if (admin === null) throw new CustomeError(404, 'Admin not found');
    return <SaveUpdateResADMINwaiter>admin;
  }
  @Post('/AddNewWaiter')
  async saveadmin(@Body() admin: SaveReqADMINwaiter): Promise<SaveUpdateResADMINwaiter> {
    const new_admin:ADMINwaiter = await new MainAdminWaiter().saveAdmin(<ADMINwaiter>(admin));
    return <SaveUpdateResADMINwaiter>(new_admin);
  }
  @Put('/updateWaiterDetail')
  async updateAdmin(@Body() admin: UpdateReqADMINwaiter): Promise<SaveUpdateResADMINwaiter> {
    const update_admin:any = await new MainAdminWaiter().updateAdmin(<ADMINwaiter>(admin));
    if (update_admin === null)
      throw new CustomeError(400, 'waiter Details not updated');
    return <SaveUpdateResADMINwaiter>update_admin;
  }
  @Delete('/deletewaiter')
  @SuccessResponse("200","Admin deleted")
  async deletadmin(@Body() delreq: DeleteAdminwaiter) {
    return await new MainAdminWaiter().deletAdmin(delreq.id);
  }
  @Get('/getAdminwaiterList')
  async getadminList(): Promise<SaveUpdateResADMINwaiter[]> {
    const aadmin: ADMINwaiter[] = await new MainAdminWaiter().getAdminslist();
    return <SaveUpdateResADMINwaiter[]>(aadmin);
  }

    @Post('/AddNewMenu')
  async savemenu(@Body() admin: SaveReqmenu): Promise<SaveUpdateResmenu> {
    const new_admin:menuadmindoc = await new Menurepositories().addmenu(<menuadmindoc>(admin));
    return <SaveUpdateResmenu>(new_admin);
  }
 
  @Delete('/deleteMenu')
  @SuccessResponse("200","Admin deleted")
  async deletMenu(@Body() delreq: Deletemenu) {
    return await new Menurepositories().deletmenu(delreq.id);
  }
  @Get('/getMenuList')
  async getMenusList(): Promise<SaveUpdateResmenu[]> {
    const aadmin: menuadmindoc[] = await new Menurepositories().getmenuslist();
    return <SaveUpdateResmenu[]>(aadmin);
  }






}
