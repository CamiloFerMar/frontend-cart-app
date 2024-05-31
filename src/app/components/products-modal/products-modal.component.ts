import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProductsFormComponent} from "../products-form/products-form.component";
import {Product} from "../../models/product";

@Component({
  selector: 'app-products-modal',
  standalone: true,
  imports: [
    ProductsFormComponent
  ],
  templateUrl: './products-modal.component.html',
  styleUrl: './products-modal.component.css'
})
export class ProductsModalComponent {
  @Input() modify!: boolean;
  @Output() addProductEventEmitter = new EventEmitter();
  @Output() editEventEmitter = new EventEmitter();
  @Input() product: Product = new Product();

  onAddProduct(product: Product) {
    this.addProductEventEmitter.emit(product);
  }

  onEditProduct(product: Product) {
    this.editEventEmitter.emit(product);
  }
}
