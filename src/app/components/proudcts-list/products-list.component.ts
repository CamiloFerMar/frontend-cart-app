import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../models/product";
import {RowItemsComponent} from "../row-items/row-items.component";

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [
    RowItemsComponent
  ],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {

  @Input() products: Product[] = [];
  @Output() removeEventEmitter: EventEmitter<number> = new EventEmitter();
  @Output() editEventEmitter: EventEmitter<Product> = new EventEmitter();


  onRemove(index: number): void {
    this.removeEventEmitter.emit(index);
  }

  onEdit(product: Product) {
    this.editEventEmitter.emit(product);
  }
}
