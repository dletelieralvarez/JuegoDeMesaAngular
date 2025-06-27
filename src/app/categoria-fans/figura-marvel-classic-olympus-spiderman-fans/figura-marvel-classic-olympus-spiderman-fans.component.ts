import { Component, ElementRef, ViewChild } from '@angular/core';
import { CarritoService } from 'src/app/carrito.service';

@Component({
  selector: 'app-figura-marvel-classic-olympus-spiderman-fans',
  templateUrl: './figura-marvel-classic-olympus-spiderman-fans.component.html',
  styleUrls: ['./figura-marvel-classic-olympus-spiderman-fans.component.css']
})
export class FiguraMarvelClassicOlympusSpidermanFansComponent {
  @ViewChild('cantidadInput') cantidadInput!: ElementRef; 
  cantidad: number = 1;

  constructor(private carritoService: CarritoService) {}

  agregarAlCarrito(): void {
      const cantidad = Number(this.cantidadInput.nativeElement.value);
      const producto = {
        nombre: 'FIGURA MARVEL CLASSIC OLYMPUS SPIDERMAN',
        sku: 'E6358',
        precio: '$8.690', 
        imagen: 'assets/imgFans/figura-marvel-classic-olympus-spiderman/01.jpg'
      };

    this.carritoService.agregarProducto(producto, cantidad);
    alert(`Cantidad Agregada al carrito (${this.cantidad}) - producto ${producto.nombre}`);
  }

  //efecto para las imagenes
  imagenes: string[] = [
    'assets/imgFans/figura-marvel-classic-olympus-spiderman/01.jpg',
    'assets/imgFans/figura-marvel-classic-olympus-spiderman/02.jpg',
    'assets/imgFans/figura-marvel-classic-olympus-spiderman/03.jpg'
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
