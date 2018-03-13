import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookInfomationComponent } from './book-infomation.component';

describe('BookInfomationComponent', () => {
  let component: BookInfomationComponent;
  let fixture: ComponentFixture<BookInfomationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookInfomationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookInfomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
