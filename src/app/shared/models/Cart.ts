import { CartItem } from "./cartitem";

export class Cart{
    items:CartItem[] = [ ];
    totalprice:number = 0;
    totalcount:number = 0;
}