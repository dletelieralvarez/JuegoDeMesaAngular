import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FiguraDidacticaCaraPapaPreComponent } from './figura-didactica-cara-papa-pre.component';
import { FormsModule } from '@angular/forms';

describe('FiguraDidacticaCaraPapaPreComponent', () => {
  let component: FiguraDidacticaCaraPapaPreComponent;
  let fixture: ComponentFixture<FiguraDidacticaCaraPapaPreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiguraDidacticaCaraPapaPreComponent],
      imports: [FormsModule]
    });
    fixture = TestBed.createComponent(FiguraDidacticaCaraPapaPreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
