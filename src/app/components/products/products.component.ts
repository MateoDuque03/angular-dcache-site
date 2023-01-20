import { Component, OnInit } from '@angular/core';
import { Product } from 'src/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  myShoppingCart: Product[] = [];
  totalPrice: number = 0;
  products: Product[] = [
    {
      id: '1',
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/Cerdo.jpeg'
    },
    {
      id: '2',
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/Chicharron.jpeg'
    },
    {
      id: '3',
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/Chuzo-pollo.jpeg'
    },
    {
      id: '4',
      name: 'Mis libros',
      price: 23,
      image: './assets/images/Costilla.jpeg'
    },
    {
      id: '5',
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/Hamburguer.jpeg'
    },
    {
      id: '6',
      name: 'Gafas',
      price: 3434,
      image: './assets/images/Mixto.jpeg'
    },
    {
      id: '7',
      name: 'Gafas',
      price: 3434,
      image: './assets/images/Picada.jpeg'
    },
    {
      id: '8',
      name: 'Gafas',
      price: 3434,
      image: './assets/images/Pollo.jpeg'
    },
    {
      id: '9',
      name: 'Gafas',
      price: 3434,
      image: './assets/images/Salmon.jpeg'
    },
    {
      id: '10',
      name: 'Gafas',
      price: 3434,
      image: './assets/images/Solomito-salsa.jpeg'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }
  
  addProduct(product: Product) {
    this.myShoppingCart.push(product);
    this.totalPrice = this.myShoppingCart.reduce((prev, current) => current.price + prev, 0)
  }

}
