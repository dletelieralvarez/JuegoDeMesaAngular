import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MasasPlayDohPreComponent } from './masas-play-doh-pre.component';
import { FormsModule } from '@angular/forms';

describe('MasasPlayDohPreComponent', () => {
  let component: MasasPlayDohPreComponent;
  let fixture: ComponentFixture<MasasPlayDohPreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MasasPlayDohPreComponent],
      imports: [FormsModule]
    });
    fixture = TestBed.createComponent(MasasPlayDohPreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
