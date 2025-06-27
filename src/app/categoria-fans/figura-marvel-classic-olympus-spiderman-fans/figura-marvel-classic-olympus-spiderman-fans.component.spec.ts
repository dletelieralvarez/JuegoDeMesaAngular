import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FiguraMarvelClassicOlympusSpidermanFansComponent } from './figura-marvel-classic-olympus-spiderman-fans.component';
import { FormsModule } from '@angular/forms';

describe('FiguraMarvelClassicOlympusSpidermanFansComponent', () => {
  let component: FiguraMarvelClassicOlympusSpidermanFansComponent;
  let fixture: ComponentFixture<FiguraMarvelClassicOlympusSpidermanFansComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiguraMarvelClassicOlympusSpidermanFansComponent],
      imports: [FormsModule]
    });
    fixture = TestBed.createComponent(FiguraMarvelClassicOlympusSpidermanFansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
