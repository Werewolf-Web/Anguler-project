import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLogin } from '../login/login';

describe('Login', () => {
  let component: UserLogin;
  let fixture: ComponentFixture<UserLogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserLogin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserLogin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
