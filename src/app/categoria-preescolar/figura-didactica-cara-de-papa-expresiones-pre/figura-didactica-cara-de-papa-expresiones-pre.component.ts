import { Component, ElementRef, ViewChild } from '@angular/core';
import { CarritoService } from 'src/app/carrito.service';

@Component({
  selector: 'app-figura-didactica-cara-de-papa-expresiones-pre',
  templateUrl: './figura-didactica-cara-de-papa-expresiones-pre.component.html',
  styleUrls: ['./figura-didactica-cara-de-papa-expresiones-pre.component.css']
})
export class FiguraDidacticaCaraDePapaExpresionesPreComponent {
  @ViewChild('cantidadInput') cantidadInput!: ElementRef; 
  cantidad: number = 1;

  constructor(private carritoService: CarritoService) {}

  agregarAlCarrito(): void {
      const cantidad = Number(this.cantidadInput.nativeElement.value);
      const producto = {
        nombre: 'FIGURA DIDÁCTICA CARA DE PAPA EXPRESIONES',
        sku: 'G0390',
        precio: '$9.990', 
        imagen: 'assets/imgPreescolar/cara-de-papa-expresiones/01.jpg'
      };

    this.carritoService.agregarProducto(producto, cantidad);
    alert(`Cantidad Agregada al carrito (${this.cantidad}) - producto ${producto.nombre}`);
  }

  //efecto para las imagenes
  imagenes: string[] = [
    'assets/imgPreescolar/cara-de-papa-expresiones/01.jpg',
    'assets/imgPreescolar/cara-de-papa-expresiones/02.jpg',
    'assets/imgPreescolar/cara-de-papa-expresiones/03.jpg'
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
