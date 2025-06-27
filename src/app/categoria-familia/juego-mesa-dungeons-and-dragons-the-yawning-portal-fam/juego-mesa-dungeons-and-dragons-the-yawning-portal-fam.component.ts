import { Component, ElementRef, ViewChild } from '@angular/core';
import { CarritoService } from 'src/app/carrito.service';

@Component({
  selector: 'app-juego-mesa-dungeons-and-dragons-the-yawning-portal-fam',
  templateUrl: './juego-mesa-dungeons-and-dragons-the-yawning-portal-fam.component.html',
  styleUrls: ['./juego-mesa-dungeons-and-dragons-the-yawning-portal-fam.component.css']
})
export class JuegoMesaDungeonsAndDragonsTheYawningPortalFamComponent {
  @ViewChild('cantidadInput') cantidadInput!: ElementRef; 
  cantidad: number = 1;

  constructor(private carritoService: CarritoService) {}

  agregarAlCarrito(): void {
      const cantidad = Number(this.cantidadInput.nativeElement.value);
      const producto = {
        nombre: 'JUEGO DE MESA DUNGEONS & DRAGONS THE YAWNING PORTAL',
        sku: 'F6647',
        precio: '$26.090', 
        imagen: 'assets/imgFamilia/juego-mesa-dungeons-and-dragons-the-yawning-portal/01.jpg'
      };

    this.carritoService.agregarProducto(producto, cantidad);
    alert(`Cantidad Agregada al carrito (${this.cantidad}) - producto ${producto.nombre}`);
  }

  //efecto para las imagenes
  imagenes: string[] = [
    'assets/imgFamilia/juego-mesa-dungeons-and-dragons-the-yawning-portal/01.jpg',
    'assets/imgFamilia/juego-mesa-dungeons-and-dragons-the-yawning-portal/02.jpg',
    'assets/imgFamilia/juego-mesa-dungeons-and-dragons-the-yawning-portal/03.jpg'
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
