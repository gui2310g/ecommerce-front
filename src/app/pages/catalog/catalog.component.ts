import { Component } from '@angular/core';
import { Product } from '../../models/product';
@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss'
})
export class CatalogComponent {
  products: Product[] = [
    {
      id: 1,
      image: 'assets/1.png',
      name: 'computador game',
      price: 50,
    },
    {
      id: 2,
      image: 'assets/1.png',
      name: 'Computador Game XT com suporte',
      price: 500
    },
    {
      id: 3,
      image: 'assets/1.png',
      name: 'Computador Game XT',
      price: 5000
    },
    {
      id: 4,
      image: 'assets/1.png',
      name: 'Computador Game XT com suporte a 16 gb de memoria e processador turbo plus',
      price: 50000   
    }
  ]
}
