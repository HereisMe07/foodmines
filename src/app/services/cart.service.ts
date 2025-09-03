import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart } from '../shared/models/Cart';
import { Food } from '../shared/models/food';
import { CartItem } from '../shared/models/cartitem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = new Cart();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);
  constructor() { }
// Find the cart item 
  // (let cartItem equal to this.cart.items find the [item where item.food.id is equal  to food.id])
  addToCart(food:Food):void{
    let cartItem = this.cart.items
    .find(item => item.food.id === food.id);
    //If the food added to the cart then we need to return
    if(cartItem){
      return;
    }
    //Push new part item to the cart
    this.cart.items.push(new CartItem(food));
  }

// Remove from cart 
  removeFromeCart(foodId: string):void{
    
  }
}
