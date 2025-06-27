import { Component, ElementRef, ViewChild } from '@angular/core';
import { CarritoService } from 'src/app/carrito.service';

@Component({
  selector: 'app-casco-electronico-fan-star-wars-black-series-mandaloriano-fans',
  templateUrl: './casco-electronico-fan-star-wars-black-series-mandaloriano-fans.component.html',
  styleUrls: ['./casco-electronico-fan-star-wars-black-series-mandaloriano-fans.component.css']
})
export class CascoElectronicoFanStarWarsBlackSeriesMandalorianoFansComponent {
  @ViewChild('cantidadInput') cantidadInput!: ElementRef; 
  cantidad: number = 1;

  constructor(private carritoService: CarritoService) {}

  agregarAlCarrito(): void {
      const cantidad = Number(this.cantidadInput.nativeElement.value);
      const producto = {
        nombre: 'CASCO ELECTRONICO FAN STAR WARS BLACK SERIES MANDALORIANO',
        sku: 'F0493',
        precio: '$104.690', 
        imagen: 'assets/imgFans/casco-electronico-fan-star-wars-black-series-mandaloriano/01.jpg'
      };

    this.carritoService.agregarProducto(producto, cantidad);
    alert(`Cantidad Agregada al carrito (${this.cantidad}) - producto ${producto.nombre}`);
  }

  //efecto para las imagenes
  imagenes: string[] = [
    'assets/imgFans/casco-electronico-fan-star-wars-black-series-mandaloriano/01.jpg',
    'assets/imgFans/casco-electronico-fan-star-wars-black-series-mandaloriano/02.jpg',
    'assets/imgFans/casco-electronico-fan-star-wars-black-series-mandaloriano/03.jpg'
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
