import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../productoSer.service';
import { ProductosMod } from '../productosMod.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-prod-admin',
  templateUrl: './prod-admin.component.html',
  styleUrls: ['./prod-admin.component.css']
})
export class ProdAdminComponent implements OnInit {
  productosMod: ProductosMod[] = [];
  contadorId: number = 1000; // ID temporal para productos nuevos

  constructor(private productoSerService: ProductoService) {}

  ngOnInit(): void {
    this.productoSerService.obtenerProductos().subscribe(data => {
      this.productosMod = data;
      // Asegura que el contador continúe después del último ID real
      const maxId = this.productosMod.reduce((max, p) => p.id > max ? p.id : max, 0);
      this.contadorId = maxId + 1;
    });
  }

  eliminar(id: number): void {
    this.productosMod = this.productosMod.filter(p => p.id !== id);
  }

  nuevoProducto: ProductosMod = {
  id: 0,
  nombre: '',
  sku: '',
  precio: 0,
  stock: 0,
  imagen: ''
};

agregarProducto(): void {
  this.productoSerService.agregarProducto(this.nuevoProducto).subscribe(prod => {
    this.productosMod.push(prod);
    
    // Limpia el formulario
    this.nuevoProducto = { id: 0, nombre: '', sku: '', precio: 0, stock: 0, imagen: '' };
    
    // Muestra alerta
    alert('✅ Producto agregado exitosamente.');
  });
}

productoEditando: ProductosMod | null = null;

abrirModalEdicion(producto: any) {
  this.productoEditando = { ...producto }; 
}

editar(producto: ProductosMod): void {
  this.productoEditando = { ...producto }; 
}

mensajeExito: string | null = null;

guardarEdicion() {
  if (this.productoEditando) {
    this.productoSerService.actualizarProducto(this.productoEditando).subscribe(() => {
      const index = this.productosMod.findIndex(p => p.id === this.productoEditando!.id);
      if (index !== -1) {
        this.productosMod[index] = this.productoEditando!;
      }

      // muestra mensaje de editado con éxito
      alert('✅ Producto editado exitosamente.');

      // Cerrar modal
      const modal = document.getElementById('editarModal');
      if (modal && (window as any).bootstrap) {
        const modalInstance = (window as any).bootstrap.Modal.getInstance(modal);
        modalInstance?.hide();
      }

      this.productoEditando = null;
    });
  }
}


cancelarEdicion(): void {
  this.productoEditando = null;
}
  
}