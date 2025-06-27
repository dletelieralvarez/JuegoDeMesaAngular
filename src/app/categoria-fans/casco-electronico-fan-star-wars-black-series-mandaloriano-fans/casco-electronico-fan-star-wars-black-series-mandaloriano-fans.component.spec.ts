import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CascoElectronicoFanStarWarsBlackSeriesMandalorianoFansComponent } from './casco-electronico-fan-star-wars-black-series-mandaloriano-fans.component';
import { FormsModule } from '@angular/forms';

describe('CascoElectronicoFanStarWarsBlackSeriesMandalorianoFansComponent', () => {
  let component: CascoElectronicoFanStarWarsBlackSeriesMandalorianoFansComponent;
  let fixture: ComponentFixture<CascoElectronicoFanStarWarsBlackSeriesMandalorianoFansComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CascoElectronicoFanStarWarsBlackSeriesMandalorianoFansComponent],
      imports: [FormsModule]
    });
    fixture = TestBed.createComponent(CascoElectronicoFanStarWarsBlackSeriesMandalorianoFansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
