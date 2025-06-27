import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FamiliaComponent } from './familia.component';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';

describe('FamiliaComponent', () => {
  let component: FamiliaComponent;
  let fixture: ComponentFixture<FamiliaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FamiliaComponent],
      imports: [RouterModule, RouterTestingModule]
    });
    fixture = TestBed.createComponent(FamiliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
