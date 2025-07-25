import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KidsComponent } from './kids.component';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';

describe('KidsComponent', () => {
  let component: KidsComponent;
  let fixture: ComponentFixture<KidsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KidsComponent],
      imports: [RouterTestingModule, RouterModule],
    });
    fixture = TestBed.createComponent(KidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
