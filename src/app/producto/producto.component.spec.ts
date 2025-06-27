import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductoComponent } from './producto.component';
import { waitForAsync } from '@angular/core/testing';

describe('ProductoComponent', () => {
  let component: ProductoComponent;
  let fixture: ComponentFixture<ProductoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ProductoComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoComponent);
    component = fixture.componentInstance;

    component.producto = {
      imagen: 'test.jpg',
      nombre: 'Test Producto',
      precio: 100
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});