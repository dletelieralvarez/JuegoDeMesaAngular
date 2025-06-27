import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SesionService } from '../../sesion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
    formLogin!: FormGroup;
    mensaje: string = ''; 

    constructor(
      private router: Router,
      private sesionService: SesionService, 
      private fb: FormBuilder
    ) {}

    ngOnInit(): void {
      this.crearAdminSiNoExiste();

      this.formLogin = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [
          Validators.required,
          Validators.pattern(/^(?=.*[A-Z])(?=.*\d).{8,}$/)
        ]]
      });

      const state = history.state as { mensaje?: string };
      if (state?.mensaje) {
        this.mensaje = state.mensaje;
      }
    }

    get email() {
      return this.formLogin.get('email')!;
    }

    get password() {
      return this.formLogin.get('password')!;
    }
  
    crearAdminSiNoExiste(): void {
      const usuario = JSON.parse(localStorage.getItem('usuario') || '[]');
      const existeAdmin = usuario.some((u: any) => u.email === 'admin@juegosmesa.com');

      if (!existeAdmin) {
        const usuarioAdmin = {
          nombre: 'Administrador',
          email: 'admin@juegosmesa.com',
          password: 'Admin2025',
          tipoUsuario: 'administrador'
        };
        usuario.push(usuarioAdmin);
        localStorage.setItem('usuario', JSON.stringify(usuario));
      }
    }
    

    onLogin(): void {
      if (this.formLogin.invalid) {
        this.formLogin.markAllAsTouched();
        return;
      }

      const { email, password } = this.formLogin.value;
      const usuarios = JSON.parse(localStorage.getItem('usuario') || '[]');

      const usuarioEncontrado = usuarios.find(
        (user: any) => user.email === email && user.password === password
      );

      if (usuarioEncontrado) {
        const sesion = {
          email: usuarioEncontrado.email,
          tipo: usuarioEncontrado.tipoUsuario,
          usuarioLogueado: true
      };

        localStorage.setItem('sesion', JSON.stringify(sesion));
        localStorage.setItem('usuarioActivo', JSON.stringify(usuarioEncontrado));
        this.sesionService.iniciarSesion(sesion);

        const destino = localStorage.getItem('redirigir') || '/inicio';
        localStorage.removeItem('redirigir');
        this.router.navigateByUrl(destino);
      } else {
        this.mensaje = 'Verifica tus credenciales. Usuario o contraseña incorrectos.';
    }
  }


    // //reemplaza js validaciones
    // validarCampos(): boolean {
    //   const emailValido = this.validarEmail(this.email);
    //   const passwordValido = this.validarPassword(this.password);

    //   this.emailValid = emailValido;
    //   this.emailInvalid = !emailValido;
    //   this.passwordValid = passwordValido;
    //   this.passwordInvalid = !passwordValido;

    //   return emailValido && passwordValido;
    // }

    // validarEmail(email: string): boolean {
    //   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //   return regex.test(email.trim());
    // }

    // validarPassword(password: string): boolean {
    //   const regex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    //   return regex.test(password);
    // }
}