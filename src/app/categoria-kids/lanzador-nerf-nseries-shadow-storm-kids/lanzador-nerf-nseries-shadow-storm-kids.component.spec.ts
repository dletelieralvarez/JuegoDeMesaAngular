import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanzadorNerfNSeriesShadowStormKidsComponent } from './lanzador-nerf-nseries-shadow-storm-kids.component';
import { FormsModule } from '@angular/forms';

describe('LanzadorNerfNSeriesShadowStormKidsComponent', () => {
  let component: LanzadorNerfNSeriesShadowStormKidsComponent;
  let fixture: ComponentFixture<LanzadorNerfNSeriesShadowStormKidsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LanzadorNerfNSeriesShadowStormKidsComponent],
      imports: [FormsModule]
    });
    fixture = TestBed.createComponent(LanzadorNerfNSeriesShadowStormKidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
