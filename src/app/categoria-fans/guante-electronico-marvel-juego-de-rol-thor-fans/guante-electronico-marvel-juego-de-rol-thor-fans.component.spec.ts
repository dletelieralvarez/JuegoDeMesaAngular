import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GuanteElectronicoMarvelJuegoDeRolThorFansComponent } from './guante-electronico-marvel-juego-de-rol-thor-fans.component';
import { FormsModule } from '@angular/forms';

describe('GuanteElectronicoMarvelJuegoDeRolThorFansComponent', () => {
  let component: GuanteElectronicoMarvelJuegoDeRolThorFansComponent;
  let fixture: ComponentFixture<GuanteElectronicoMarvelJuegoDeRolThorFansComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuanteElectronicoMarvelJuegoDeRolThorFansComponent],
      imports: [FormsModule]
    });
    fixture = TestBed.createComponent(GuanteElectronicoMarvelJuegoDeRolThorFansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
