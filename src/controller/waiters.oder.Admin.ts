import {  waitersOder } from '../types/document/waiter.oder';
import { waitersOderAdmin } from '../repositories/waiters.oder.repositories';
import CustomeError from '../utills/error';
import { Get, Route, Tags, Post, Body, Path, Put, Delete, SuccessResponse, Security } from "tsoa";
import { SaveUpdateReswaiterOder } from '../types/Responses/waiter.oder.responses';
import { DeletewaiterReqOder, GetwaiterReqOder, SaveReqgetmenuidORsaveOder, SaveReqwaiterOder,UpdateReqwaiterOder } from '../types/Request/waiter.oder.request';
import { menuadmindoc } from '../types/document/menu';
import { SaveUpdateResmenu } from '../types/Responses/menu.responses';
import { Menurepositories } from '../repositories/menu.repositories';
import { Getmenu } from '../types/request/menu.request';


@Route('waiter')
@Tags('waiterOder_admin')

export class waiterOderController {
  constructor() { }
  @Post("/WaiterSearchOderById")
  async getadmin(@Body() getreq:GetwaiterReqOder): Promise<SaveUpdateReswaiterOder> {
    const admin: any = await new waitersOderAdmin().getAdmin(getreq.id);
    if (admin === null) throw new CustomeError(404, 'waiter oder not found');
    return <SaveUpdateReswaiterOder>admin;
  }
  @Post('/WaiterSaveoder')
  async saveadmin(@Body() getreqmenu: SaveReqgetmenuidORsaveOder): Promise<SaveUpdateReswaiterOder> {
    const new_menu: any = await new Menurepositories().getmenu(getreqmenu.menuId);
    if (new_menu === null) throw new CustomeError(404, 'Menu not found');
    const newOrder = {
      IteamName: new_menu.IteamName,
      Price: new_menu.Price,
    }
    const new_save: waitersOder = await new waitersOderAdmin().saveAdmin(<any>(newOrder));
    return <SaveUpdateReswaiterOder>(new_save);
  }
 
  @Delete('/waiterdeleteOder')
  @SuccessResponse("200","waiter Oder deleted")
  async deletadmin(@Body() delreq: DeletewaiterReqOder) {
    return await new waitersOderAdmin().deletAdmin(delreq.id);
  }
  @Get('/Waitergetoderlist')
  async getadminList(): Promise<SaveUpdateReswaiterOder[]> {
    const admin:  waitersOder[] = await new waitersOderAdmin().gettAdminslist();
    console.log(admin)
    return <SaveUpdateReswaiterOder[]>(admin);
  }
  
  @Get('/getMenuListw')
  async getMenusListw(): Promise<SaveUpdateResmenu[]> {
    const aadmin: menuadmindoc[] = await new Menurepositories().getmenuslist();
    return <SaveUpdateResmenu[]>(aadmin);
  }
 
  
}