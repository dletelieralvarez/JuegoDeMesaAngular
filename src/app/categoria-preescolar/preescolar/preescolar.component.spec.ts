import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PreescolarComponent } from './preescolar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';

describe('PreescolarComponent', () => {
  let component: PreescolarComponent;
  let fixture: ComponentFixture<PreescolarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreescolarComponent],
      imports: [RouterModule, RouterTestingModule]
    });
    fixture = TestBed.createComponent(PreescolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
