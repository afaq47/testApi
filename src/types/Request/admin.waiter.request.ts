export interface SaveReqADMINwaiter{
    FirstName: string;
    LastName: string;
    Desgination: string;
    cell: string;
    JoinDate: string;
    adress: string;
  }
  export interface UpdateReqADMINwaiter {
    _id: string;
    FirstName: string;
    LastName: string;
    Desgination: string;
    cell: string;
    JoinDate: string;
    adress: string;
  }
  export interface GetAdminwaiter {
    id: string
  }
  export interface DeleteAdminwaiter {
    id: string
  }