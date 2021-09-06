import express from 'express';
import { AdminwaiterController } from '../controller/admin.waiter.controller';
import apikey from '../Middleware/api_key';
import { ADMINwaiter } from '../types/document/admin.waiter';

import { DeleteAdminwaiter, GetAdminwaiter, SaveReqADMINwaiter, UpdateReqADMINwaiter } from '../types/Request/admin.waiter.request';
import { Deletemenu, Getmenu, SaveReqmenu, UpdateReqmenu } from '../types/Request/menu.request';
import { SaveUpdateResADMINwaiter } from '../types/Responses/admin.waiter.Responses';
import { SaveUpdateResmenu } from '../types/Responses/menu.responses';

import CustomeError from '../utills/error';

export class AdminwaiterRoutes {
  router: express.Router;
  constructor() {
    this.router = express.Router();
    this.routes();
  }
  routes() {
    this.router.post('/getWaitersById', apikey, async (req, res, next) => {
      try {
        const getreq:GetAdminwaiter = req.body;
          const admin:SaveUpdateResADMINwaiter = await new AdminwaiterController().getadmin(getreq);
          res.send(admin);
      } catch (error) {
        next(error);
      }
    });
    this.router.post('/AddNewWaiter',apikey, async (req, res, next) => {
      try {
        const admin: SaveReqADMINwaiter = req.body;
        const newAdmin:SaveUpdateResADMINwaiter = await new AdminwaiterController().saveadmin(admin);
        res.status(200).json({
          message: newAdmin
        });
      } catch (error) {
        next(error);
      }
    });
    this.router.put('/updateWaiterDetail',apikey, async (req, res, next) => {
      try {
        const admin: UpdateReqADMINwaiter = req.body;
        const upadated_admin:SaveUpdateResADMINwaiter = await new AdminwaiterController().updateAdmin(admin);
        const response = {
          upadated_admin,
        };
        res.status(200).json({
          message: response
        });
      } catch (error) {
        next(error);
      }
    });
    this.router.delete('/deletewaiter',apikey, async (req, res, next) => {
      try {
        const delreq:DeleteAdminwaiter = req.body;
        const Deleted_admin = await new AdminwaiterController().deletadmin(delreq);
        res.status(200).json({
          message: 'Waiter Details deleted'
        });
      } catch (error) {
        next(error);
      }
    });
    this.router.get('/getAdminwaiterList',apikey, async (req, res, next) => {
      try {
        const adminList: SaveUpdateResADMINwaiter[] = await new AdminwaiterController().getadminList();
        res.status(200).json({
          result: adminList
        });

      } catch (error) {
        next(error);
      }
    });


    this.router.post('/AddNewMenu', async (req, res, next) => {
      try {
        const admin: SaveReqmenu = req.body;
        const newAdmin:SaveUpdateResmenu = await new AdminwaiterController().savemenu(admin);
        res.status(200).json({
          message: newAdmin
        });
      } catch (error) {
        next(error);
      }
    });
   
   
    this.router.delete('/deleteMenu',apikey, async (req, res, next) => {
      try {
        const delreq:Deletemenu = req.body;
        const Deleted_admin = await new AdminwaiterController().deletMenu(delreq);
        res.status(200).json({
          message: 'Admin Meanu deleted'
        });
      } catch (error) {
        next(error);
      }
    });
    this.router.get('/getMenuList',apikey, async (req, res, next) => {
      try {
        const adminList: SaveUpdateResmenu[] = await new AdminwaiterController().getMenusList();
        res.status(200).json({
          result: adminList
        });

      } catch (error) {
        next(error);
      }
    });






  }
}
export const AdminwaiterRoutesApi = new AdminwaiterRoutes().router;