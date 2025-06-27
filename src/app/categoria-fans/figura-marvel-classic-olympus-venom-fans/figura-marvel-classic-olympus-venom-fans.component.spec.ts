import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FiguraMarvelClassicOlympusVenomFansComponent } from './figura-marvel-classic-olympus-venom-fans.component';
import { FormsModule } from '@angular/forms';

describe('FiguraMarvelClassicOlympusVenomFansComponent', () => {
  let component: FiguraMarvelClassicOlympusVenomFansComponent;
  let fixture: ComponentFixture<FiguraMarvelClassicOlympusVenomFansComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiguraMarvelClassicOlympusVenomFansComponent],
      imports: [FormsModule]
    });
    fixture = TestBed.createComponent(FiguraMarvelClassicOlympusVenomFansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
