import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DardosNerfNSeries80uniKidsComponent } from './dardos-nerf-nseries80uni-kids.component';
import { FormsModule } from '@angular/forms';

describe('DardosNerfNSeries80uniKidsComponent', () => {
  let component: DardosNerfNSeries80uniKidsComponent;
  let fixture: ComponentFixture<DardosNerfNSeries80uniKidsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DardosNerfNSeries80uniKidsComponent],
      imports: [FormsModule]
    });
    fixture = TestBed.createComponent(DardosNerfNSeries80uniKidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
