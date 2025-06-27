import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SesionService } from '../../sesion.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formLogin!: FormGroup;
  mensaje: string = '';

  constructor(private router: Router, private sesionService: SesionService, private fb: FormBuilder) {}

    ngOnInit(): void {
      this.formLogin = this.fb.group({        
          nombre: ['', Validators.required], 
          correo: ['', [Validators.required, Validators.email]], 
          password: [
            '', 
            [
              Validators.required, 
              Validators.minLength(8), 
              Validators.pattern('^(?=.*[A-Z])(?=.*\\d).{8,}$')
            ]
          ], 
          confirmarPassword: ['', Validators.required],
          }, { validators: this.passwordsIguales }); 
        
          this.formLogin.get('confirmarPassword')?.valueChanges.subscribe(() => {
            this.formLogin.updateValueAndValidity({ onlySelf: false, emitEvent: false });
        });
    }

        // Validador personalizado para verificar que ambas contraseñas coincidan
      passwordsIguales(group: AbstractControl): { [key: string]: boolean } | null {
      const password = group.get('password')?.value;
      const confirmar = group.get('confirmarPassword')?.value;
      return password === confirmar ? null : { noCoinciden: true };
    }

    get f(): {
      [key: string]: AbstractControl;
    }{
      return this.formLogin.controls;
    }

  onLogin(): void {

    if (this.formLogin.invalid) {
      this.formLogin.markAllAsTouched();
      this.mensaje = 'Revisa los campos del formulario';
      return;
    }

    const { nombre, correo, password } = this.formLogin.value;
    const usuarios = JSON.parse(localStorage.getItem('usuario') || '[]');
    const usuarioExistente = usuarios.find((user: any) => user.email === correo);

    if (usuarioExistente) {
      this.mensaje = 'El correo electrónico ya está registrado.';
      return;
    }

    const nuevoUsuario = {
      nombre,
      email: correo,
      password,
      tipoUsuario: 'cliente'
    };

    usuarios.push(nuevoUsuario);
    localStorage.setItem('usuario', JSON.stringify(usuarios));
    this.router.navigate(['/login'], {
      state: { mensaje: 'Registro exitoso. Ahora puedes iniciar sesión.' }
    });
  }

  // validarCampos(): boolean {
  //   // Validación de campos
  //   this.nombreValid = this.nombre.trim().length > 0;
  //   this.nombreInvalid = !this.nombreValid;

  //   this.correoValid = !!this.correo.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.correo);
  //   this.correoInvalid = !this.correoValid;

  //   const regexPassword = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
  //   this.passwordValid = regexPassword.test(this.password);
  //   this.passwordInvalid = !this.passwordValid;

  //   const confirmarValida = this.password === this.confirmarPassword;
  //   this.confirmarPasswordValid = confirmarValida;
  //   this.confirmarPasswordInvalid = !confirmarValida;
    
  //   return this.nombreValid && this.correoValid && this.passwordValid && this.confirmarPasswordValid;
  // }
}


  

