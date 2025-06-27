import { Component } from '@angular/core';
import { CarritoService } from 'src/app/carrito.service';

/**
 * @component
 * @description
 * Componente Preescolar: Muestra productos correspondientes a la categoria Preescolar.
 * 
 */

@Component({
  selector: 'app-preescolar',
  templateUrl: './preescolar.component.html',
  styleUrls: ['./preescolar.component.css']
})
export class PreescolarComponent {
  productos = [
    {
      nombre: 'MASAS PLAY-DOH CLÁSICO MALETIN COLORES',
      imagen: 'assets/imgPreescolar/play-doh/01.jpg',
      precio: '$22.990',
      link: '/masas-play-doh-pre'
    },
    {
      nombre: 'FIGURA DIDÁCTICA CARA DE PAPA CREA TU FAMILIA',
      imagen: 'assets/imgPreescolar/cara-de-papa/02.jpg',
      precio: '$22.990',
      precioAnterior: '$24.990',
      link: '/figura-didactica-cara-de-papa-pre'
    },
    {
      nombre: 'FIGURA DIDÁCTICA CARA DE PAPA SR. CARA DE PAPA',
      imagen: 'assets/imgPreescolar/sr-cara-de-papa/01.jpg',
      precio: '$9.990',
      precioAnterior: '$11.990',
      link: '/figura-didactica-sr-cara-papa-pre'
    },
    {
      nombre: 'FIGURA DIDÁCTICA CARA DE PAPA SRA. CARA DE PAPA',
      imagen: 'assets/imgPreescolar/sra-cara-de-papa/01.jpg',
      precio: '$9.990',
      link: '/figura-didactica-sra-cara-papa-pre'
    },
    {
      nombre: 'FIGURA DIDÁCTICA CARA DE PAPA EXPRESIONES',
      imagen: 'assets/imgPreescolar/cara-de-papa-expresiones/01.jpg',
      precio: '$19.990',
      link: '/figura-didactica-cara-de-papa-expresiones-pre'
    }
  ];

  constructor(private carritoService: CarritoService) {}

  agregarAlCarrito(producto: any): void {
    this.carritoService.agregarProducto(producto);   
    alert(`${producto.nombre} se agregó al carrito`);
  }
  
}
