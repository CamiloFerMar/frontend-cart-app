import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProductsListComponent} from "../proudcts-list/products-list.component";
import {ProductsFormComponent} from "../products-form/products-form.component";
import {ProductsModalComponent} from "../products-modal/products-modal.component";
import {Product} from "../../models/product";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    ProductsListComponent,
    ProductsFormComponent,
    ProductsModalComponent
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  showForm: boolean = false;
  productModify: Product = new Product();
  modifyProduct: boolean = false;
  @Input() products: Product[] = []
  @Output() addProductEventEmitter = new EventEmitter();
  @Output() editProductEventEmitter = new EventEmitter();
  @Output() deleteProductEventEmitter = new EventEmitter();

  onAddProduct(product: Product) {
    this.addProductEventEmitter.emit(product)
  }

  onRemoveProduct(id: number) {
    this.deleteProductEventEmitter.emit(id);
  }

  onEditEventProduct(product: Product){
    this.editProductEventEmitter.emit(product);
  }

  onEditProduct(product: Product) {
    this.productModify = product;
    this.modifyProduct = true;
  }

  resetProduct(){
    this.productModify = new Product();
    this.modifyProduct = false;
  }
}
