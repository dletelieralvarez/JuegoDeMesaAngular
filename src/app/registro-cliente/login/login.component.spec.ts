import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SesionService } from '../../sesion.service';
import { By } from '@angular/platform-browser';

class MockRouter {
  navigateByUrl = jasmine.createSpy('navigateByUrl');
}

class MockSesionService {
  iniciarSesion = jasmine.createSpy('iniciarSesion');
}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router: MockRouter;
  let sesionService: MockSesionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ReactiveFormsModule, FormsModule],
      providers: [
        { provide: Router, useClass: MockRouter },
        { provide: SesionService, useClass: MockSesionService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router) as unknown as MockRouter;
    sesionService = TestBed.inject(SesionService) as unknown as MockSesionService;
    
    fixture.detectChanges();
    localStorage.clear();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('formulario inválido si está vacío', () => {
    component.formLogin.setValue({ email: '', password: '' });
    expect(component.formLogin.invalid).toBeTrue();
  });

  it('formulario válido con datos correctos', () => {
    component.formLogin.setValue({ email: 'admin@juegosmesa.com', password: 'Admin2025' });
    expect(component.formLogin.valid).toBeTrue();
  });

  it('debería mostrar mensaje si credenciales incorrectas', () => {
    component.formLogin.setValue({ email: 'fake@email.com', password: 'Wrong1234' });
    component.onLogin();
    expect(component.mensaje).toContain('Verifica tus credenciales');
  });

  it('debería loguear y redirigir con credenciales válidas', () => {
    // simula un usuario válido
    const usuarioMock = [{
      email: 'admin@juegosmesa.com',
      password: 'Admin2025',
      tipoUsuario: 'administrador'
    }];
    localStorage.setItem('usuario', JSON.stringify(usuarioMock));

    component.formLogin.setValue({ email: 'admin@juegosmesa.com', password: 'Admin2025' });
    component.onLogin();

    expect(router.navigateByUrl).toHaveBeenCalledWith('/inicio');
    expect(sesionService.iniciarSesion).toHaveBeenCalled();
  });
});
