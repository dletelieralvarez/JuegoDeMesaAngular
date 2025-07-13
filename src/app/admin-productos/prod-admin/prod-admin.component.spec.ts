import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdAdminComponent } from './prod-admin.component';

describe('ProdAdminComponent', () => {
  let component: ProdAdminComponent;
  let fixture: ComponentFixture<ProdAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdAdminComponent]
    });
    fixture = TestBed.createComponent(ProdAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
