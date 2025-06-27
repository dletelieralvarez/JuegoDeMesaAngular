import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JuegoMesaMonopolyHarryPotterFamComponent } from './juego-mesa-monopoly-harry-potter-fam.component';
import { FormsModule } from '@angular/forms';

describe('JuegoMesaMonopolyHarryPotterFamComponent', () => {
  let component: JuegoMesaMonopolyHarryPotterFamComponent;
  let fixture: ComponentFixture<JuegoMesaMonopolyHarryPotterFamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JuegoMesaMonopolyHarryPotterFamComponent],
      imports: [FormsModule]
    });
    fixture = TestBed.createComponent(JuegoMesaMonopolyHarryPotterFamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
