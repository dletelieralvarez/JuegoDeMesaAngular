import { Component, ElementRef, ViewChild } from '@angular/core';
import { CarritoService } from 'src/app/carrito.service';

@Component({
  selector: 'app-guante-electronico-marvel-juego-de-rol-thor-fans',
  templateUrl: './guante-electronico-marvel-juego-de-rol-thor-fans.component.html',
  styleUrls: ['./guante-electronico-marvel-juego-de-rol-thor-fans.component.css']
})
export class GuanteElectronicoMarvelJuegoDeRolThorFansComponent {
  @ViewChild('cantidadInput') cantidadInput!: ElementRef; 
    cantidad: number = 1;
  
    constructor(private carritoService: CarritoService) {}
  
    agregarAlCarrito(): void {
        const cantidad = Number(this.cantidadInput.nativeElement.value);
        const producto = {
          nombre: 'GUANTE ELECTRÓNICO MARVEL JUEGO DE ROL THOR',
          sku: 'E1799',
          precio: '$21.690', 
          imagen: 'assets/imgFans/guante-electronico-marvel-juego-de-rol-thor/01.jpg'
        };
  
      this.carritoService.agregarProducto(producto, cantidad);
      alert(`Cantidad Agregada al carrito (${this.cantidad}) - producto ${producto.nombre}`);
    }

    //efecto para las imagenes
  imagenes: string[] = [
    'assets/imgFans/guante-electronico-marvel-juego-de-rol-thor/01.jpg',
    'assets/imgFans/guante-electronico-marvel-juego-de-rol-thor/02.jpg',
    'assets/imgFans/guante-electronico-marvel-juego-de-rol-thor/03.jpg'
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
