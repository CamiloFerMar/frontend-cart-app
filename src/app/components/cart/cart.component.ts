import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CartItem} from "../../models/cartItem";
import {Product} from "../../models/product";
import {CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CurrencyPipe
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  @Input() cartItems!: CartItem[];

  @Input() total: number = 0;

  @Output() idProductEventEmitter = new EventEmitter();

  onDeleteCart(id: number) {
    this.idProductEventEmitter.emit(id);
  }

}
