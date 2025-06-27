import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FiguraDidacticaCaraDePapaExpresionesPreComponent } from './figura-didactica-cara-de-papa-expresiones-pre.component';
import { FormsModule } from '@angular/forms';

describe('FiguraDidacticaCaraDePapaExpresionesPreComponent', () => {
  let component: FiguraDidacticaCaraDePapaExpresionesPreComponent;
  let fixture: ComponentFixture<FiguraDidacticaCaraDePapaExpresionesPreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiguraDidacticaCaraDePapaExpresionesPreComponent],
      imports: [FormsModule]
    });
    fixture = TestBed.createComponent(FiguraDidacticaCaraDePapaExpresionesPreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
