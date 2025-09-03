import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart } from '../shared/models/Cart';
import { Food } from '../shared/models/food';
import { CartItem } from '../shared/models/cartitem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart = this.getCartFromLocalStorage();
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
    this.getCartFromLocalStorage();
  }

// Remove from cart 
  removeFromeCart(foodId: string):void{
    this.cart.items = this.cart.items
      .filter(item => item.food.id !== foodId);
      this.getCartFromLocalStorage();
  }

// Change quantity
  changeQuantity(foodId: string, quantity: number){
    let cartItem = this.cart.items
    .find(item => item.food.id === foodId)
    // If cart item not found then return
    if(!cartItem) return;

    cartItem.quantity = quantity;
    // Calculate the total price
    cartItem.price = Number(quantity) * Number(cartItem.food.price);
    this.getCartFromLocalStorage();
  }
// Clear the cart
  clearCart(){
    this.cart = new Cart();
    this.getCartFromLocalStorage();
  }
// Get the cart observable
  getCartObservable(){
    // asObservable = cartSubject is an object send value to outside we want to use it inside the cart
    return this.cartSubject.asObservable();
  }

  private setCartToLocalStorage():void{
    this.cart.totalprice = this.cart.items.reduce((prevSum, currentItem)=> prevSum + currentItem.price,0);
    this.cart.totalcount = this.cart.items.reduce((prevSum, currentItem)=> prevSum + currentItem.quantity,0);

    // string presentation of the cart
    const cartJson = JSON.stringify(this.cart);
    // set the cart to the local storage
    localStorage.setItem('Cart', cartJson);
    this.cartSubject.next(this.cart); // we want to notify all the subscriber that the cart has been updated
  }
  
  private getCartFromLocalStorage():Cart{
    const cartJson = localStorage.getItem('Cart');
    return cartJson? JSON.parse(cartJson): new Cart();
  }
}
