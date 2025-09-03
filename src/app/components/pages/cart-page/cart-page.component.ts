import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/cartitem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
  //Hold data for cart items to display in html
  cart!: Cart;
  //Inject the cart service to the component
  constructor( private cartService: CartService) {
    //Use the cart service to get the cart observable and update when we have new values
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    })
   }

  ngOnInit(): void {
  }

  //Remove item from cart method
  removeFromCart(cartItem: CartItem){
    this.cartService.removeFromeCart(cartItem.food.id)
  }

  //Change quantity method
  changeQUantity(cartItem:CartItem,quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id,quantity);
  }
}
