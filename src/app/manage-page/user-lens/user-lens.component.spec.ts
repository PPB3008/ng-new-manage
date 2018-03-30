import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLensComponent } from './user-lens.component';

describe('UserLensComponent', () => {
  let component: UserLensComponent;
  let fixture: ComponentFixture<UserLensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
