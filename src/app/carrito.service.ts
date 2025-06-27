import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private carrito = this.obtenerCarritoLocal();
  private totalItemsSubject = new BehaviorSubject<number>(this.contarItems(this.carrito));
  totalItems$ = this.totalItemsSubject.asObservable();

  public obtenerCarritoLocal(): any[] {
    return JSON.parse(localStorage.getItem('carrito') || '[]');
  }

  public guardarCarrito(carrito: any[]) {
    localStorage.setItem('carrito', JSON.stringify(carrito));
    this.totalItemsSubject.next(this.contarItems(carrito));
  }

  private contarItems(carrito: any[]): number {
    return carrito.reduce((acc, item) => acc + item.cantidad, 0);
  }

  agregarProducto(producto: any, cantidad: number = 1): void {
      let carrito = this.obtenerCarritoLocal();
      const index = carrito.findIndex((item: any) => item.nombre === producto.nombre);

      if (index > -1) {
        carrito[index].cantidad += cantidad;
      } else {
        carrito.push({ ...producto, cantidad});
      }

      this.guardarCarrito(carrito);
  }

  limpiar(): void {
    localStorage.removeItem('carrito');
    this.totalItemsSubject.next(0);
  }
}
