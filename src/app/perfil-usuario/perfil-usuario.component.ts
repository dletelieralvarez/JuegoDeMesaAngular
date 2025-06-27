import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {
 
  public usuarioActivo: any = this.obtenerUsuarioActivo();
  //mostrar datos de despacho en grilla
  despacho: any[] = []; 
  despachoForm!: FormGroup;
  modoEdicion: boolean = false;
  indiceEdicion: number | null = null;

  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit(): void {

    this.despachoForm = this.fb.group({
      direccion: ['', Validators.required],
      comuna: ['', Validators.required],
      region: ['', Validators.required],
      telefono: ['', [Validators.required, Validators.pattern(/^\d{9}$/)]],
    });

    this.cargarDatosDespacho(); 
  }

  public obtenerUsuarioActivo(): any[] {
    return JSON.parse(localStorage.getItem('usuarioActivo') || '[]');
  }

  public editarCorreoUsuario(){
    const correoOriginal = this.usuarioActivo.email; 
    const nuevoCorreo = prompt('Ingrese su nuevo correo electrónico:', correoOriginal);

    if(nuevoCorreo && nuevoCorreo !== correoOriginal){
      this.usuarioActivo.email = nuevoCorreo;

      //actualizar el usuario activo en localStorage
      localStorage.setItem('usuarioActivo', JSON.stringify(this.usuarioActivo));
      alert('Correo electrónico actualizado correctamente.');

      //actualizar la vista
      // const usuario = JSON.parse(localStorage.getItem('usuarioActivo') || '[]');
      // const index = usuario.findIndex((u: any) => u.email === correoOriginal);
      // if (index !== -1) {
      //   usuario[index] = this.usuarioActivo;
      //   localStorage.setItem('usuarioActivo', JSON.stringify(usuario));
      // }
    }   
  }

  //mostrar datos de despacho en grilla
  cargarDatosDespacho(): void {
    this.despacho = JSON.parse(localStorage.getItem('datosDespacho') || '[]');
    if (this.despacho.length === 0) {
      alert('No hay datos de despacho registrados.');
    }
  }

  onGuardar(): void {
    if (this.despachoForm.invalid) {
      this.despachoForm.markAllAsTouched();
      return;
    }

    const datos = this.despachoForm.value;

    if (this.modoEdicion && this.indiceEdicion !== null) {
      this.despacho[this.indiceEdicion] = datos;
      alert('Datos de despacho actualizados correctamente.');
    } else {
      const despachoExistente = this.despacho.find((d: any) => d.direccion === datos.direccion);
      if (despachoExistente) {
        alert('Ya existe un despacho registrado para esta dirección.');
        return;
      }
      this.despacho.push(datos);
      alert('Datos de despacho registrados correctamente.');
    }

    localStorage.setItem('datosDespacho', JSON.stringify(this.despacho));
    this.reiniciarFormulario();
  }

  public editarDatosDespacho(index: number) {
    const despacho = this.despacho[index];
    if (!despacho) return;

    // this.direccion = despacho.direccion;
    // this.comuna = despacho.comuna;
    // this.region = despacho.region;
    // this.telefono = despacho.telefono;

    this.despachoForm.setValue({
      direccion: despacho.direccion,
      comuna: despacho.comuna,
      region: despacho.region,
      telefono: despacho.telefono
    });

    this.modoEdicion = true;
    this.indiceEdicion = index;
  }
    reiniciarFormulario() {
    this.despachoForm.reset();
    this.modoEdicion = false;
    this.indiceEdicion = null;
  }
}

  // direccion: string = '';
  // comuna: string = '';
  // region: string = '';
  // telefono: string = '';

  // direccionValid: boolean = false;
  // direccionInvalid: boolean = false;
  // comunaValid: boolean = false;
  // comunaInvalid: boolean = false;
  // regionValid: boolean = false;
  // regionInvalid: boolean = false;
  // telefonoValid: boolean = false;
  // telefonoInvalid: boolean = false;

  
  // onLogin(): void {    
  //   const valid = this.validarCampos();
  //   if (!valid) return;

  //   const despacho = JSON.parse(localStorage.getItem('datosDespacho') || '[]');
  //   const despachoExistente = despacho.find((d: any) => d.direccion === this.direccion);
  //   if (despachoExistente) {
  //     alert('Ya existe un despacho registrado para este usuario.');
  //     return;
  //   }

  //   const nuevoDespacho = {
  //     direccion: this.direccion,
  //     comuna: this.comuna, 
  //     region: this.region, 
  //     telefono: this.telefono
  //   };

  //   despacho.push(nuevoDespacho);
  //   localStorage.setItem('datosDespacho', JSON.stringify(despacho));
  //   alert('Datos de despacho registrados correctamente.');
  // }

  // validarCampos(): boolean {
  //   this.direccionValid = this.direccion.trim().length > 0;
  //   this.direccionInvalid = !this.direccionValid;

  //   this.comunaValid = this.comuna.trim().length > 0;
  //   this.comunaInvalid = !this.comunaValid;

  //   this.regionValid = this.region.trim().length > 0;
  //   this.regionInvalid = !this.regionValid;

  //   const regexTelefono = /^\d{9}$/; // 9 dígitos
  //   this.telefonoValid = regexTelefono.test(this.telefono);
  //   this.telefonoInvalid = !this.telefonoValid;

  //   return this.direccionValid && this.comunaValid && this.regionValid && this.telefonoValid;
  // }



  // public guardarEdicion() {
  //   if (this.indiceEdicion === null) return;

  //   const valid = this.validarCampos();
  //   if (!valid) return;

  //   this.despacho[this.indiceEdicion] = {
  //     direccion: this.direccion,
  //     comuna: this.comuna,
  //     region: this.region,
  //     telefono: this.telefono
  //   };

  //   localStorage.setItem('datosDespacho', JSON.stringify(this.despacho));
  //   alert('Datos de despacho actualizados correctamente.');

  //   // Limpiar formulario
  //   this.reiniciarFormulario();
  // }

  // private reiniciarFormulario() {
  //   this.direccion = '';
  //   this.comuna = '';
  //   this.region = '';
  //   this.telefono = '';

  //   this.modoEdicion = false;
  //   this.indiceEdicion = null;
  // }
//}
