import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateUpplyComponent } from './candidate-upply.component';

describe('CandidateUpplyComponent', () => {
  let component: CandidateUpplyComponent;
  let fixture: ComponentFixture<CandidateUpplyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CandidateUpplyComponent]
    });
    fixture = TestBed.createComponent(CandidateUpplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
