import { Component } from '@angular/core';
import { CarritoService } from 'src/app/carrito.service';

@Component({
  selector: 'app-familia',
  templateUrl: './familia.component.html',
  styleUrls: ['./familia.component.css']
})
export class FamiliaComponent {
   productos = [
    {
      nombre: 'JUEGO DE MESA AVALON HILL TALISMAN',
      imagen: 'assets/imgFamilia/juego-mesa-avalon-hill-talisman/01.jpg',
      precio: '$40.690',
      link: '/juego-mesa-avalon-hill-talisman-fam'
    },
    {
      nombre: 'JUEGO DE MESA MONOPOLY HARRY POTTER',
      imagen: 'assets/imgFamilia/juego-mesa-monopoly-harry-potter/01.jpg',
      precio: '$24.990',
      precioAnterior: '$27.990',
      link: '/juego-mesa-monopoly-harry-potter-fam'
    },
    {
      nombre: 'JUEGO DE MESA MONOPOLY GAMER MARIOKART',
      imagen: 'assets/imgFamilia/juego-mesa-monopoly-gamer-mariokart/01.jpg',
      precio: '$27.990',
      precioAnterior: '$39.990',
      link: '/juego-mesa-monopoly-gamer-mario-kart-fam'
    },
    {
      nombre: 'JUEGO DE MESA DUNGEONS & DRAGONS THE YAWNING PORTAL',
      imagen: 'assets/imgFamilia/juego-mesa-dungeons-and-dragons-the-yawning-portal/01.jpg',
      precio: '$26.990',
      link: '/juego-mesa-dungeons-and-dragons-the-yawning-portal-fam'
    }
  ];

  constructor(private carritoService: CarritoService) {}

  agregarAlCarrito(producto: any): void {
    this.carritoService.agregarProducto(producto);   
    alert(`${producto.nombre} se agregó al carrito`);
  }  
}
