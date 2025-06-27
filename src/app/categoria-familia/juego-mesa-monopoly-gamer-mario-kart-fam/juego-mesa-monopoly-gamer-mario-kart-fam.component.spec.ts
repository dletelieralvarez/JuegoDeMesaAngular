import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JuegoMesaMonopolyGamerMarioKartFamComponent } from './juego-mesa-monopoly-gamer-mario-kart-fam.component';
import { FormsModule } from '@angular/forms';

describe('JuegoMesaMonopolyGamerMarioKartFamComponent', () => {
  let component: JuegoMesaMonopolyGamerMarioKartFamComponent;
  let fixture: ComponentFixture<JuegoMesaMonopolyGamerMarioKartFamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JuegoMesaMonopolyGamerMarioKartFamComponent],
      imports: [FormsModule]
    });
    fixture = TestBed.createComponent(JuegoMesaMonopolyGamerMarioKartFamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
