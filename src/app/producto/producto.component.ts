import { Component, Input } from '@angular/core';
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  @Input() producto: any;

  constructor(private carritoService: CarritoService) {}

  agregarAlCarrito(): void {
    const { id, nombre, precio } = this.producto;
    this.carritoService.agregarProducto({ id, nombre, precio });
  }
}
