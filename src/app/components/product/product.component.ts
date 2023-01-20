import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: Product = {
    id: '1',
    name: '',
    image: 'https://www.m2crowd.com/core/i/placeholder.png',
    price: 200
  }
  @Output() addedProduct = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddToCart() {
    this.addedProduct.emit(this.product)
  }
}
