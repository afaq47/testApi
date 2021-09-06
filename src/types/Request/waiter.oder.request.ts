export interface SaveReqwaiterOder{
  IteamName: string;
  Price:number;
  Desgination: string;
  cell: string;
  email: string;
  password:string;
  }
  export interface UpdateReqwaiterOder {
    Iteam_id:string;
    IteamName: string;
    Price: number;
  Desgination: string;
  cell: string;
  email: string;
  password:string;
  }
  export interface GetwaiterReqOder {
    id: string
  }
  export interface DeletewaiterReqOder {
    id: string
  }
  export interface Reqtime {
    id: string
    time: string
    acceptoder:string
  }
  export interface SaveReqgetmenuidORsaveOder{
    menuId: string
    }