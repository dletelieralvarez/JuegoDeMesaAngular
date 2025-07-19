import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../carrito.service';

/**
 * @component
 * @description
 * Componente Carrito: Carrito de compras del juego de mesa. Permite ver los productos añadidos, modificar cantidades, eliminar productos y finalizar la compra.
 * 
 */

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  carrito: any[] = [];
  total: number = 0;

  constructor(private carritoService: CarritoService) {}

  ngOnInit(): void {
    this.cargarCarrito();
  }

  cargarCarrito(): void {
    this.carrito = this.carritoService.obtenerCarritoLocal();
    this.total = this.carrito.reduce((acc, producto) => {
      const precioNumerico = Number(producto.precio.toString().replace(/\$|\./g, ''));
      return acc + precioNumerico * producto.cantidad;
    }, 0);
  }

  cambiarCantidad(index: number, cambio: number): void {
    const producto = this.carrito[index];
    producto.cantidad += cambio;

    if (producto.cantidad <= 0) {
      this.carrito.splice(index, 1);
    }

    this.carritoService.guardarCarrito(this.carrito);
    this.cargarCarrito();
  }

  eliminarProducto(index: number): void {
    this.carrito.splice(index, 1);
    this.carritoService.guardarCarrito(this.carrito);
    this.cargarCarrito();
  }

  finalizarCompra(): void {
    alert('Gracias por tu compra');
    this.carritoService.limpiar();
    this.cargarCarrito();
  }

  obtenerPrecioNumerico(precio: string | number): number {
    if (typeof precio === 'string') {
      return Number(precio.replace(/[\$\.]/g, ''));
    }
    return precio;
  }

  getSubtotal(producto: any): number {
    const precioNumerico = this.obtenerPrecioNumerico(producto.precio);
    return precioNumerico * producto.cantidad;
  }
}
