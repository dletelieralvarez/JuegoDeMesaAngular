import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductosMod } from './productosMod.model';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private productosUrl = 'https://raw.githubusercontent.com/dletelieralvarez/api_nuevos_productos/refs/heads/main/apiproductos.json';

  private productosEnMemoria: ProductosMod[] = [];

  constructor(private http: HttpClient) {}

  // Metodo GET desde GitHub (solo una vez y luego cache)
  obtenerProductos(): Observable<ProductosMod[]> {
    if (this.productosEnMemoria.length > 0) {
      return of(this.productosEnMemoria);
    } else {
      return this.http.get<ProductosMod[]>(this.productosUrl).pipe(
        tap(data => this.productosEnMemoria = data)
      );
    }
  }

  // Genera ID incremental
  private generarNuevoId(): number {
    const ids = this.productosEnMemoria.map(p => p.id);
    return ids.length > 0 ? Math.max(...ids) + 1 : 1;
  }

  // POST en memoria
  agregarProducto(producto: ProductosMod): Observable<ProductosMod> {
    producto.id = this.generarNuevoId();
    if (!this.productosEnMemoria.find(p => p.id === producto.id)) {
      this.productosEnMemoria.push(producto);
    }
    return of(producto);
  }

  // PUT en memoria
  actualizarProducto(producto: ProductosMod): Observable<ProductosMod> {
    const index = this.productosEnMemoria.findIndex(p => p.id === producto.id);
    if (index !== -1) {
      this.productosEnMemoria[index] = producto;
    }
    return of(producto);
  }

  // DELETE en memoria
  eliminarProducto(id: number): Observable<boolean> {
    const index = this.productosEnMemoria.findIndex(p => p.id === id);
    if (index !== -1) {
      this.productosEnMemoria.splice(index, 1);
      return of(true);
    }
    return of(false);
  }
}
