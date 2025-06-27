import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JuegoMesaDungeonsAndDragonsTheYawningPortalFamComponent } from './juego-mesa-dungeons-and-dragons-the-yawning-portal-fam.component';
import { FormsModule } from '@angular/forms';

describe('JuegoMesaDungeonsAndDragonsTheYawningPortalFamComponent', () => {
  let component: JuegoMesaDungeonsAndDragonsTheYawningPortalFamComponent;
  let fixture: ComponentFixture<JuegoMesaDungeonsAndDragonsTheYawningPortalFamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JuegoMesaDungeonsAndDragonsTheYawningPortalFamComponent],
      imports: [FormsModule]
    });
    fixture = TestBed.createComponent(JuegoMesaDungeonsAndDragonsTheYawningPortalFamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
