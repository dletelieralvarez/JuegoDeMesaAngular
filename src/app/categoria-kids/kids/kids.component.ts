import { Component } from '@angular/core';
import { CarritoService } from 'src/app/carrito.service';

/**
 * @component
 * @description
 * Componente Kids: Muestra 5 productos correspondientes a la categoria Kids.
 * 
 */

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css']
})
export class KidsComponent {
  // agregarAlCarrito(nombre: string, precio: number, id: string) {
    productos = [
      {
        nombre: 'DARDOS NERF N SERIES 80 UNIDADES',
        imagen: 'assets/imgKids/dardos-nerf-n-series-80-unidades/01.jpg',
        precio: '$9.990',        
        link: '/dardos-nerf-nseries80uni-kids'
      },
      {
        nombre: 'LANZADOR NERF N SERIES PACK TRIPLE ACCIÓN',
        imagen: 'assets/imgKids/lanzador-nerf-n-series-pack-triple-accion/01.jpg',
        precio: '$20.990',
        precioAnterior: '$24.990',
        link: '/lanzador-nerf-nseries-pack-triple-accion-kids'
      },
      {
        nombre: 'LANZADOR NERF WILD WOLFPACK',
        imagen: 'assets/imgKids/lanzador-nerf-wild-wolfpack/01.jpg',
        precio: '$9.990',  
        precioAnterior: '$20.990',      
        link: '/lanzador-nerf-wild-wolf-pack-kids'
      },
      {
        nombre: 'LANZADOR NERF N SERIES STRIKEBACK',
        imagen: 'assets/imgKids/lanzador-nerf-n-series-strikeback/01.jpg',
        precio: '$27.990',        
        link: '/lanzador-nerf-nseries-strike-back-kids'
      },
      {
        nombre: 'LANZADOR NERF N SERIES SHADOW STORM',
        imagen: 'assets/imgKids/lanzador-nerf-n-series-shadow-storm/01.jpg',
        precio: '$30.990',        
        link: '/lanzador-nerf-nseries-shadow-storm-kids'
      }
    ];
  //}

  constructor(private carritoService: CarritoService) {}

  agregarAlCarrito(producto: any): void {
    this.carritoService.agregarProducto(producto);   
    alert(`${producto.nombre} se agregó al carrito`);
  }
}
