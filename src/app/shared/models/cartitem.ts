import { Food } from "./food";


export class CartItem {
 constructor(public food:Food){
 }

  quantity: number = 1;
  price: number = Number(this.food.price);
}