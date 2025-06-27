import { Component, ElementRef, ViewChild } from '@angular/core';
import { CarritoService } from 'src/app/carrito.service';

@Component({
  selector: 'app-lanzador-nerf-nseries-pack-triple-accion-kids',
  templateUrl: './lanzador-nerf-nseries-pack-triple-accion-kids.component.html',
  styleUrls: ['./lanzador-nerf-nseries-pack-triple-accion-kids.component.css']
})
export class LanzadorNerfNSeriesPackTripleAccionKidsComponent {
  @ViewChild('cantidadInput') cantidadInput!: ElementRef; 
  cantidad: number = 1;

  constructor(private carritoService: CarritoService) {}

  agregarAlCarrito(): void {
      const cantidad = Number(this.cantidadInput.nativeElement.value);
      const producto = {
        nombre: 'LANZADOR NERF N SERIES PACK TRIPLE ACCIÓN',
        sku: 'F9841',
        precio: '$20.990', 
        imagen: 'assets/imgKids/lanzador-nerf-n-series-pack-triple-accion/01.jpg'
      };

    this.carritoService.agregarProducto(producto, cantidad);
    alert(`Cantidad Agregada al carrito (${this.cantidad}) - producto ${producto.nombre}`);
  }

    agregarProductoRelacionadoAlCarrito(producto: any): void {
       this.carritoService.agregarProducto(producto, 1);  
       alert(`${producto.nombre} agregado al carrito con exito.`);
  }

  //efecto para las imagenes
  imagenes: string[] = [
    'assets/imgKids/lanzador-nerf-n-series-pack-triple-accion/01.jpg',
    'assets/imgKids/lanzador-nerf-n-series-pack-triple-accion/02.jpg',
    'assets/imgKids/lanzador-nerf-n-series-pack-triple-accion/03.jpg'
  ];

  imagenActualIndex = 0;
  intervalId: any;

  ngOnInit() {
    this.iniciarCarrusel();
  }

  mostrarImagen(index: number): void {
    this.imagenActualIndex = index;
    this.actualizarImagen();
  }

  actualizarImagen(): void {
    const mainImage = document.getElementById('mainImage') as HTMLImageElement;
    if (mainImage) {
      mainImage.src = this.imagenes[this.imagenActualIndex];
    }
  }

  iniciarCarrusel(): void {
    this.intervalId = setInterval(() => {
      this.imagenActualIndex = (this.imagenActualIndex + 1) % this.imagenes.length;
      this.actualizarImagen();
    }, 3000); // cambia cada 3 segundos
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
