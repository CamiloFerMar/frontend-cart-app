import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from "../../models/product";
import {CurrencyPipe} from "@angular/common";

@Component({
  selector: 'tr[app-row-items]',
  standalone: true,
  imports: [
    CurrencyPipe
  ],
  templateUrl: './row-items.component.html',
  styleUrl: './row-items.component.css'
})
export class RowItemsComponent {
  @Input() product!: Product;
  @Output() removeEventEmitter: EventEmitter<number> = new EventEmitter();
  @Output() editEventEmitter: EventEmitter<Product> = new EventEmitter();

  onRemove(id: number): void {
    this.removeEventEmitter.emit(id);
  }

  onEdit(product: Product) {
    this.editEventEmitter.emit(product);
  }
}
