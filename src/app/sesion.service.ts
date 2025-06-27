import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SesionService {
  private sesionKey = 'sesion';
  private sesionSubject = new BehaviorSubject<boolean>(this.estaLogueado());
  public sesion$ = this.sesionSubject.asObservable();
  
  obtenerSesion(): any {
    const sesion = localStorage.getItem(this.sesionKey);
    return sesion ? JSON.parse(sesion) : null;
  }

  estaLogueado(): boolean {
    const sesion = this.obtenerSesion();
    return sesion?.usuarioLogueado || false;
  }

  esAdministrador(): boolean {
    const sesion = this.obtenerSesion();
    return sesion?.tipo === 'administrador';
  }

  iniciarSesion(datos: any): void {
    localStorage.setItem(this.sesionKey, JSON.stringify(datos));
    this.sesionSubject.next(true); // notifica que hay sesión activa
  }

  cerrarSesion(): void {
    localStorage.removeItem(this.sesionKey);
    localStorage.removeItem('carrito');
    this.sesionSubject.next(false); // notifica que se cerró sesión
  }
  
}
