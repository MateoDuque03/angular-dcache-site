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
  showProductDetail: boolean = false;
  productChoosen: Product = {
    id: 1,
    title: '',
    price: 0,
    description: '',
    category: {
      id: 0,
      name: '',
      typeImg: ''
    },
    images: ['https://www.m2crowd.com/core/i/placeholder.png'],
  }
  products: Product[] = [
    {
      id: 1,
      title: 'EL mejor juguete',
      price: 32000,
      description:'',
      category: {
        id: 0,
        name: '',
        typeImg: ''
      },
      images: ['./assets/images/Cerdo.jpeg']
    },
    {
      id: 2,
      title: 'EL mejor juguete',
      price: 32000,
      description:'',
      category: {
        id: 0,
        name: '',
        typeImg: ''
      },
      images: ['./assets/images/Chicharron.jpeg']
    },
    {
      id: 3,
      title: 'EL mejor juguete',
      price: 32000,
      description:'',
      category: {
        id: 0,
        name: '',
        typeImg: ''
      },
      images: ['./assets/images/Chuzo-pollo.jpeg']
    },
    {
      id: 4,
      title: 'EL mejor juguete',
      price: 32000,
      description:'',
      category: {
        id: 0,
        name: '',
        typeImg: ''
      },
      images: ['./assets/images/Costilla.jpeg']
    },
    {
      id: 5,
      title: 'EL mejor juguete',
      price: 32000,
      description:'',
      category: {
        id: 0,
        name: '',
        typeImg: ''
      },
      images: ['./assets/images/Hamburguer.jpeg']
    },
    {
      id: 6,
      title: 'EL mejor juguete',
      price: 32000,
      description:'',
      category: {
        id: 0,
        name: '',
        typeImg: ''
      },
      images: ['./assets/images/Mixto.jpeg']
    },
    {
      id: 7,
      title: 'EL mejor juguete',
      price: 32000,
      description:'',
      category: {
        id: 0,
        name: '',
        typeImg: ''
      },
      images: ['./assets/images/Picada.jpeg']
    },
    {
      id: 8,
      title: 'EL mejor juguete',
      price: 32000,
      description:'',
      category: {
        id: 0,
        name: '',
        typeImg: ''
      },
      images: ['./assets/images/Pollo.jpeg']
    },
    {
      id: 9,
      title: 'EL mejor juguete',
      price: 32000,
      description:'',
      category: {
        id: 0,
        name: '',
        typeImg: ''
      },
      images: ['./assets/images/Salmon.jpeg']
    },
    {
      id: 10,
      title: 'EL mejor juguete',
      price: 32000,
      description:'',
      category: {
        id: 0,
        name: '',
        typeImg: ''
      },
      images: ['./assets/images/Solomito-salsa.jpeg']
    },
    {
      id: 11,
      title: 'EL mejor juguete',
      price: 32000,
      description:'',
      category: {
        id: 0,
        name: '',
        typeImg: ''
      },
      images: ['./assets/images/Solomito-salsa.jpeg']
    },
    {
      id: 12,
      title: 'EL mejor juguete',
      price: 32000,
      description:'',
      category: {
        id: 0,
        name: '',
        typeImg: ''
      },
      images: ['./assets/images/Picada.jpeg']
    },
    {
      id: 13,
      title: 'EL mejor juguete',
      price: 32000,
      description:'',
      category: {
        id: 0,
        name: '',
        typeImg: ''
      },
      images: ['./assets/images/Pollo.jpeg']
    },
    {
      id: 14,
      title: 'EL mejor juguete',
      price: 32000,
      description:'',
      category: {
        id: 0,
        name: '',
        typeImg: ''
      },
      images: ['./assets/images/Salmon.jpeg']
    },
    {
      id: 15,
      title: 'EL mejor juguete',
      price: 32000,
      description:'',
      category: {
        id: 0,
        name: '',
        typeImg: ''
      },
      images: ['./assets/images/Picada.jpeg']
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }
  
  addProduct(product: Product) {
    this.myShoppingCart.push(product);
    this.totalPrice = this.myShoppingCart.reduce((prev, current) => current.price + prev, 0)
  }

  toggleProductDetail() {
    this.showProductDetail = !this.showProductDetail;
  }

  onShowDetail(id: number) {
    console.log(id)
    const prod = this.products.find(data => data.id === id);
    this.productChoosen = prod as Product;
    this.toggleProductDetail();
    console.log(prod);
  }

}
