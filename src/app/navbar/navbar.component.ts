import { Component, OnInit } from '@angular/core';
import { SesionService } from '../sesion.service'; 
import { CarritoService } from '../carrito.service';  
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

/**
 * @component
 * @description
 * Componente Navbar: barra de navegación donde se puede acceder a distintas categorías.
 * Muestra inicio de sesión, carrito de compras y, según el usuario, opciones de administrador o datos personales.
 */

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  //carrito de compras
  usuarioLogueado = false;
  esAdmin = false;
  totalCarrito: number = 0;
  carritoSubscription!: Subscription;

  //para utilizar funciones creadas en validaSesion.js
  links: { texto: string, url: string, clase?: string, id?: string }[] = [];

  constructor(private sesionService: SesionService,
    private carritoService: CarritoService,
    private router: Router) {}


  sesionSubscription!: Subscription;
  ngOnInit(): void {
      this.sesionSubscription = this.sesionService.sesion$.subscribe(() => {
      this.usuarioLogueado = this.sesionService.estaLogueado();
      this.esAdmin = this.sesionService.esAdministrador();
      this.generarLinks();      
    });

    this.carritoSubscription = this.carritoService.totalItems$.subscribe(
      total => this.totalCarrito = total
    );
  }

  //cancelar la suscripción al servicio de carrito y sesión
  ngOnDestroy(): void {    
    this.sesionSubscription?.unsubscribe();
    this.carritoSubscription?.unsubscribe();
  }

  generarLinks(): void {
    this.links = [
      { texto: 'Inicio', url: '/inicio' },
      { texto: 'Kids', url: '/kids' },
      { texto: 'Preescolar', url: '/preescolar' },
      { texto: 'Familia', url: '/familia' },
      { texto: 'Fans', url: '/fans' }
    ];

    if (this.usuarioLogueado) {
      if (this.esAdmin) {
        this.links.push(
          { texto: 'Administrador', url: '/administrador', clase: 'text-warning fw-bold' },
          { texto: 'Cerrar sesión', url: '', id: 'cerrar-sesion' }
        );
      } else {
        this.links.push(
          { texto: 'Mis Datos', url: '/perfil-usuario', clase: 'text-warning fw-bold' },
          { texto: 'Cerrar sesión', url: '', id: 'cerrar-sesion' }
        );
      }
    } else {
      this.links.push({ texto: 'Iniciar sesión', url: '/login' });
    }
  }

  cerrarSesion(): void {
    this.sesionService.cerrarSesion();
    this.carritoService.limpiar();

    //actualiza el estado de la sesion en navbar
    this.usuarioLogueado = false;
    this.esAdmin = false;
    this.generarLinks();

    //redirecciona a la pagina de inicio
    this.router.navigate(['/inicio']);
  }

  onClick(link: any): void {
    if (link.id === 'cerrar-sesion') {
      this.cerrarSesion();
    } else {
      this.router.navigateByUrl(link.url);
    }
  }

}
