export interface Iproducts {
    pName : string,
    pId : number,
    pStatus : Ipstatus
}

export type Ipstatus = "In-progress" | "Dispatched" | "Delivered"