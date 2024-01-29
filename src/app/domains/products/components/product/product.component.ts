import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../shared/models/product.model';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({required: true}) product!: Product;

  @Output() addToCart = new EventEmitter();

  addToCartHandler() {
    console.log('click form child');
    this.addToCart.emit('hola este es un msg desde el hijo' + this.product.title);
  }
}
