import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCompanyOffersComponent } from './all-company-offers.component';

describe('AllCompanyOffersComponent', () => {
  let component: AllCompanyOffersComponent;
  let fixture: ComponentFixture<AllCompanyOffersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllCompanyOffersComponent]
    });
    fixture = TestBed.createComponent(AllCompanyOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
