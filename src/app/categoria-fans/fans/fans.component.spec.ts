import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FansComponent } from './fans.component';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';

describe('FansComponent', () => {
  let component: FansComponent;
  let fixture: ComponentFixture<FansComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FansComponent],
      imports: [RouterTestingModule, RouterModule]
    });
    fixture = TestBed.createComponent(FansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
