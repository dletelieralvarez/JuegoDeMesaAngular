import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanzadorNerfNSeriesPackTripleAccionKidsComponent } from './lanzador-nerf-nseries-pack-triple-accion-kids.component';
import { FormsModule } from '@angular/forms';

describe('LanzadorNerfNSeriesPackTripleAccionKidsComponent', () => {
  let component: LanzadorNerfNSeriesPackTripleAccionKidsComponent;
  let fixture: ComponentFixture<LanzadorNerfNSeriesPackTripleAccionKidsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LanzadorNerfNSeriesPackTripleAccionKidsComponent],
      imports: [FormsModule]
    });
    fixture = TestBed.createComponent(LanzadorNerfNSeriesPackTripleAccionKidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
