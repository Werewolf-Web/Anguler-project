import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateRegister } from '../register/register';

describe('Register', () => {
  let component: CandidateRegister;
  let fixture: ComponentFixture<CandidateRegister>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandidateRegister]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidateRegister);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
