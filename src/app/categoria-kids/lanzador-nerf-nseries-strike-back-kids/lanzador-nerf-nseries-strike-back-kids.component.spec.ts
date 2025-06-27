import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanzadorNerfNSeriesStrikeBackKidsComponent } from './lanzador-nerf-nseries-strike-back-kids.component';
import { FormsModule } from '@angular/forms';

describe('LanzadorNerfNSeriesStrikeBackKidsComponent', () => {
  let component: LanzadorNerfNSeriesStrikeBackKidsComponent;
  let fixture: ComponentFixture<LanzadorNerfNSeriesStrikeBackKidsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LanzadorNerfNSeriesStrikeBackKidsComponent],
      imports: [FormsModule]
    });
    fixture = TestBed.createComponent(LanzadorNerfNSeriesStrikeBackKidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
