import { Component } from '@angular/core';
import { CarritoService } from 'src/app/carrito.service';

@Component({
  selector: 'app-fans',
  templateUrl: './fans.component.html',
  styleUrls: ['./fans.component.css']
})
export class FansComponent {
  productos = [
    {
      nombre: 'FIGURA MARVEL CLASSIC OLYMPUS SPIDERMAN',
      imagen: 'assets/imgFans/figura-marvel-classic-olympus-spiderman/01.jpg',
      precio: '$85.690',
      link: '/figura-marvel-classic-olympus-spiderman-fans'
    },
    {
      nombre: 'FIGURA MARVEL CLASSIC OLYMPUS VENOM',
      imagen: 'assets/imgFans/figura-marvel-classic-olympus-venom/01.jpg',
      precio: '$11.590',
      precioAnterior: '$16.990',
      link: '/figura-marvel-classic-olympus-venom-fans'
    },
    {
      nombre: 'GUANTE ELECTRÓNICO MARVEL JUEGO DE ROL THOR',
      imagen: 'assets/imgFans/guante-electronico-marvel-juego-de-rol-thor/01.jpg',
      precio: '$21.690',
      precioAnterior: '$20.990',
      link: '/guante-electronico-marvel-juego-de-rol-thor-fans'
    },
    {
      nombre: 'CASCO ELECTRÓNICO FAN STAR WARS BLACK SERIES MANDALORIANO',
      imagen: 'assets/imgFans/casco-electronico-fan-star-wars-black-series-mandaloriano/01.jpg',
      precio: '$104.690',
      link: '/casco-electronico-fan-star-wars-black-series-mandaloriano-fans'
    }
  ];

  constructor(private carritoService: CarritoService) {}

  agregarAlCarrito(producto: any): void {
    this.carritoService.agregarProducto(producto);   
    alert(`${producto.nombre} se agregó al carrito`);
  }
}
