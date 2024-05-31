import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from "../../models/product";
import {FormsModule, NgForm} from "@angular/forms";

@Component({
  selector: 'app-products-form',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './products-form.component.html',
  styleUrl: './products-form.component.css'
})
export class ProductsFormComponent {
  @Input() product: Product = new Product();
  @Output() addProductEventEmitter = new EventEmitter();
  @Output() editEventEmitter = new EventEmitter();
  @Input() modify: boolean = false;

  onSubmit(itemForm: NgForm) {
    if (itemForm.valid){
      if (this.modify){
        this.editEventEmitter.emit(this.product);
      } else {
        this.addProductEventEmitter.emit(this.product);
      }
      this.product = new Product();

      itemForm.reset();
      itemForm.resetForm();
    }
  }

  onCreate() {
    this.modify = false;
  }

  onModify() {
    this.modify = true;
  }
}
