import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanzadorNerfWildWolfPackKidsComponent } from './lanzador-nerf-wild-wolf-pack-kids.component';
import { FormsModule } from '@angular/forms';

describe('LanzadorNerfWildWolfPackKidsComponent', () => {
  let component: LanzadorNerfWildWolfPackKidsComponent;
  let fixture: ComponentFixture<LanzadorNerfWildWolfPackKidsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LanzadorNerfWildWolfPackKidsComponent],
      imports: [FormsModule]
    });
    fixture = TestBed.createComponent(LanzadorNerfWildWolfPackKidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
