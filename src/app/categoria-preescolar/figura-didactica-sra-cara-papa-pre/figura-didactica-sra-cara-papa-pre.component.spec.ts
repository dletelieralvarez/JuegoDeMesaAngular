import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FiguraDidacticaSraCaraPapaPreComponent } from './figura-didactica-sra-cara-papa-pre.component';
import { FormsModule } from '@angular/forms';

describe('FiguraDidacticaSraCaraPapaPreComponent', () => {
  let component: FiguraDidacticaSraCaraPapaPreComponent;
  let fixture: ComponentFixture<FiguraDidacticaSraCaraPapaPreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiguraDidacticaSraCaraPapaPreComponent],
      imports: [FormsModule]
    });
    fixture = TestBed.createComponent(FiguraDidacticaSraCaraPapaPreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
