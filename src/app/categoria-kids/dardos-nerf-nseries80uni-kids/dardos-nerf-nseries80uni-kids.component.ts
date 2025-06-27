import { Component, ElementRef, ViewChild } from '@angular/core';
import { CarritoService } from 'src/app/carrito.service';

@Component({
  selector: 'app-dardos-nerf-nseries80uni-kids',
  templateUrl: './dardos-nerf-nseries80uni-kids.component.html',
  styleUrls: ['./dardos-nerf-nseries80uni-kids.component.css']
})
export class DardosNerfNSeries80uniKidsComponent {
  @ViewChild('cantidadInput') cantidadInput!: ElementRef; 
  cantidad: number = 1;

  constructor(private carritoService: CarritoService) {}

  agregarAlCarrito(): void {
      const cantidad = Number(this.cantidadInput.nativeElement.value);
      const producto = {
        nombre: 'DARDOS NERF N SERIES 80 UNIDADES',
        sku: 'F8638',
        precio: '$9.990', 
        imagen: 'assets/imgKids/dardos-nerf-n-series-80-unidades/01.jpg'
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
    'assets/imgKids/dardos-nerf-n-series-80-unidades/01.jpg',
    'assets/imgKids/dardos-nerf-n-series-80-unidades/02.jpg',
    // 'assets/imgKids/dardos-nerf-n-series-80-unidades/03.jpg',
    'assets/imgKids/dardos-nerf-n-series-80-unidades/04.jpg'
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
