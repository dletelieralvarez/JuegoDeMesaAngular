import { Component, ElementRef, ViewChild } from '@angular/core';
import { CarritoService } from 'src/app/carrito.service';

@Component({
  selector: 'app-juego-mesa-monopoly-harry-potter-fam',
  templateUrl: './juego-mesa-monopoly-harry-potter-fam.component.html',
  styleUrls: ['./juego-mesa-monopoly-harry-potter-fam.component.css']
})
export class JuegoMesaMonopolyHarryPotterFamComponent {
  @ViewChild('cantidadInput') cantidadInput!: ElementRef; 
    cantidad: number = 1;
  
    constructor(private carritoService: CarritoService) {}
  
    agregarAlCarrito(): void {
        const cantidad = Number(this.cantidadInput.nativeElement.value);
        const producto = {
          nombre: 'JUEGO DE MESA MONOPOLY HARRY POTTER',
          sku: 'F9422',
          precio: '$40.690', 
          imagen: 'assets/imgFamilia/juego-mesa-monopoly-harry-potter/01.jpg'
        };
  
      this.carritoService.agregarProducto(producto, cantidad);
      alert(`Cantidad Agregada al carrito (${this.cantidad}) - producto ${producto.nombre}`);
    }

    //efecto para las imagenes
  imagenes: string[] = [
    'assets/imgFamilia/juego-mesa-monopoly-harry-potter/01.jpg',
    'assets/imgFamilia/juego-mesa-monopoly-harry-potter/02.jpg',
    'assets/imgFamilia/juego-mesa-monopoly-harry-potter/03.jpg'
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
