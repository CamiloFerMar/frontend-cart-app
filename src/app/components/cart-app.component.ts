import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ProductService} from "../services/product.service";
import {Product} from "../models/product";
import {CatalogComponent} from "./catalog/catalog.component";
import {CartComponent} from "./cart/cart.component";
import {CartItem} from "../models/cartItem";
import {FormsModule} from "@angular/forms";
import {AdminComponent} from "./admin/admin.component";

@Component({
  selector: 'app-cart-app',
  standalone: true,
  imports: [
    CatalogComponent,
    CartComponent,
    FormsModule,
    AdminComponent
  ],
  templateUrl: './cart-app.component.html',
  styleUrl: './cart-app.component.css'
})
export class CartAppComponent implements OnInit {

  products: Product[] = [];
  cartItems: CartItem[] = [];
  total: number = 0;
  showCart: boolean = false;
  filter: string = '';
  showAdmin: boolean = false;

  constructor(private service: ProductService) {
  }

  ngOnInit(): void {
    this.findAll();
    this.cartItems = JSON.parse(sessionStorage.getItem('cartItems') || '[]');
    this.calculateTotal();
  }

  onChange(input: string): void {
    console.log(input)
    if (input.trim().length > 0){
      this.onInputChange(input)
    } else {
      this.products = JSON.parse(sessionStorage.getItem('products') || '[]');
    }
  }

  findAll(): void {
    this.service.findAll().subscribe({
      next: (response) => {
        const productsFind = response as Product[];
        if (productsFind.length > 0) {
          this.products = productsFind;
          sessionStorage.setItem('products', JSON.stringify(productsFind));
        }
      },
      error: (error) => {
        console.error('Error fetching data', error);
      }
    });
  }

  onAddProduct(product: Product) {
    this.service.saveProduct(product).subscribe({
      next: (response) => {
        this.findAll();
      },
      error: (error) => {
        console.error('Error insert data', error);
      }
    });
  }

  onRemoveProduct(id: number) {
    this.service.deleteProduct(id).subscribe({
      next: (response) => {
        this.findAll();
      },
      error: () => {
        console.log('Error deleting data', id);
      }
    })
  }

  onEditProduct(product: Product) {
    this.service.updateProduct(product).subscribe({
      next: (response) => {
        this.findAll();
      },
      error: () => {
        console.log('Error updating data');
      }
    })
  }

  onAddCart(product: Product): void {
    const hasItem = this.cartItems.find((cart) => cart.product.id === product.id);
    if (hasItem) {
      this.cartItems = this.cartItems.map(cartITem => {
        if (cartITem.product.id === product.id) {
          return {...cartITem, quantity: cartITem.quantity + 1}
        }
        return cartITem;
      });
    } else {
      this.cartItems = [...this.cartItems, {product: {...product}, quantity: 1}];
    }
    this.calculateTotal();
    this.saveSessionStorage();
  }

  onDeleteCart(id: number): void {
    this.cartItems = this.cartItems.filter(cartItem => cartItem.product.id !== id);
    this.calculateTotal();
    this.saveSessionStorage()
  }

  calculateTotal(): void {
    this.total = this.cartItems.reduce((accumulator, carItem) =>
      accumulator + (carItem.quantity * carItem.product.price), 0);
  }

  saveSessionStorage(): void {
    sessionStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  openCloseCart() {
    this.showCart = !this.showCart;
  }

  onInputChange(filter: string): void {
    const productsFilter = this.products.filter(product => product.name.toLowerCase().includes(filter.toLowerCase())
      || product.description.toLowerCase().includes(filter.toLowerCase()))
    if (productsFilter.length > 0) {
      this.products = productsFilter;
    } else {
      this.products = []
    }
  }

  onShowAdmin() {
    this.showAdmin = true;
  }

  onShowHome() {
    this.showAdmin = false;
  }



}
