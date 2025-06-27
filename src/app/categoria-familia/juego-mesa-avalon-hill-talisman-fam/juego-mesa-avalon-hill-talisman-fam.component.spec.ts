import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JuegoMesaAvalonHillTalismanFamComponent } from './juego-mesa-avalon-hill-talisman-fam.component';
import { FormsModule } from '@angular/forms';

describe('JuegoMesaAvalonHillTalismanFamComponent', () => {
  let component: JuegoMesaAvalonHillTalismanFamComponent;
  let fixture: ComponentFixture<JuegoMesaAvalonHillTalismanFamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JuegoMesaAvalonHillTalismanFamComponent],
      imports: [FormsModule]
    });
    fixture = TestBed.createComponent(JuegoMesaAvalonHillTalismanFamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
