import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FiguraDidacticaSrCaraPapaPreComponent } from './figura-didactica-sr-cara-papa-pre.component';
import { FormsModule } from '@angular/forms';

describe('FiguraDidacticaSrCaraPapaPreComponent', () => {
  let component: FiguraDidacticaSrCaraPapaPreComponent;
  let fixture: ComponentFixture<FiguraDidacticaSrCaraPapaPreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiguraDidacticaSrCaraPapaPreComponent],
      imports: [FormsModule]
    });
    fixture = TestBed.createComponent(FiguraDidacticaSrCaraPapaPreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
