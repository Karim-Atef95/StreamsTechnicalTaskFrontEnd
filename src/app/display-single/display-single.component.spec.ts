import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySingleComponent } from './display-single.component';

describe('DisplaySingleComponent', () => {
  let component: DisplaySingleComponent;
  let fixture: ComponentFixture<DisplaySingleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplaySingleComponent]
    });
    fixture = TestBed.createComponent(DisplaySingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
