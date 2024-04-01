import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCandidacyComponent } from './my-candidacy.component';

describe('MyCandidacyComponent', () => {
  let component: MyCandidacyComponent;
  let fixture: ComponentFixture<MyCandidacyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyCandidacyComponent]
    });
    fixture = TestBed.createComponent(MyCandidacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
