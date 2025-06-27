import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilUsuarioComponent } from './perfil-usuario.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('PerfilUsuarioComponent', () => { 
  let component: PerfilUsuarioComponent;
  let fixture: ComponentFixture<PerfilUsuarioComponent>;

  beforeEach(async () => {
    localStorage.clear(); 

    await TestBed.configureTestingModule({
      declarations: [PerfilUsuarioComponent],
      imports: [FormsModule, RouterTestingModule, ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PerfilUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //PRUEBA : GUARDAR DATOS VALIDOS DE DESPACHO EN LOCALSTORAGE
  it('debería guardar datos de despacho válidos', () => {
     component.despachoForm.setValue({
      direccion: 'Calle 123',
      comuna: 'Comuna Test',
      region: 'Región Test',
      telefono: '912345678'
    });

    component.onGuardar();

    const datosGuardados = JSON.parse(localStorage.getItem('datosDespacho') || '[]');
    expect(datosGuardados.length).toBe(1);
    expect(datosGuardados[0].direccion).toBe('Calle 123');
    expect(datosGuardados[0].telefono).toBe('912345678');
    
  });

    it('no debería guardar si el formulario es inválido', () => {
    component.despachoForm.setValue({
      direccion: '',
      comuna: '',
      region: '',
      telefono: '123' // inválido: menos de 9 dígitos
    });

    component.onGuardar();

    const datosGuardados = JSON.parse(localStorage.getItem('datosDespacho') || '[]');
    expect(datosGuardados.length).toBe(0);

  });

});
