import { Request , Response, NextFunction } from "express";
import CustomeError from "../utills/error"
import * as jwt from "jsonwebtoken"
import console from "console";

const apikeyjwt = (req:Request , res:Response , next:NextFunction) => {
    
 var api_keyjwt = req.body.token || req.query.token || req.headers["authorization"]?.split(" ")[1];

 if(api_keyjwt){
try{

// console.log(req);
    const decoded = jwt.verify(api_keyjwt,"[abdcdefghij]");

    next();

}catch(err){
    err = new CustomeError (401,"Invalid token auth ");
    next(err);
}

 }else 
 {
     let err = new CustomeError(403,"User is Require auth");
     next(err);
 }

}
export default apikeyjwt;