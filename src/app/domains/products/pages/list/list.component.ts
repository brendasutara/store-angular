import { Component, inject, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { CommonModule } from '@angular/common';
import { Product } from '../../../shared/models/product.model';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { CartService } from '../../../shared/services/cart.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<Product[]>([]);
  private cartService = inject(CartService);

  constructor() {
    const initProducts: Product[] = [
      {
        id: Date.now(),
        title: 'Pro 1',
        price: 100,
        image: 'https://picsum.photos/640/640?r=23',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Pro 2',
        price: 350,
        image: 'https://picsum.photos/640/640?r=12',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Pro 3',
        price: 200,
        image: 'https://picsum.photos/640/640?r=20',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Pro 4',
        price: 180,
        image: 'https://picsum.photos/640/640?r=80',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Pro 5',
        price: 100,
        image: 'https://picsum.photos/640/640?r=223',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Pro 6',
        price: 350,
        image: 'https://picsum.photos/640/640?r=112',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Pro 7',
        price: 200,
        image: 'https://picsum.photos/640/640?r=120',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Pro 8',
        price: 180,
        image: 'https://picsum.photos/640/640?r=8520',
        creationAt: new Date().toISOString()
      },
    ];
    this.products.set(initProducts)
  }

  addToCart (product: Product) {
    this.cartService.addToCart(product);
  }
}
