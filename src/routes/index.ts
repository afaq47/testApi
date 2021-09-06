import express from 'express';

import jwt from "jsonwebtoken"
import { AdminwaiterRoutesApi } from './admin.waiter.routes';
import {  waiteroderRoutesApi } from './waiter.oder.Routes';
import { waiterOderController } from '../controller/waiters.oder.Admin';

import { AdminwaiterController } from '../controller/admin.waiter.controller';
export class MainRouter {
    router: express.Router;
    constructor() {
        this.router = express.Router();
        this.routes();
    }
    routes() {
     
             
       
        this.router.use('/admin',AdminwaiterRoutesApi);
         this.router.use('/waiter',waiteroderRoutesApi);
        

    }


}
export const MainApi = new MainRouter().router;