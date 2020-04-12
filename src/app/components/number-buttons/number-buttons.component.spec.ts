import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberButtonsComponent } from './number-buttons.component';

describe('NumberNumberButtonsComponent', () => {
  let component: NumberButtonsComponent;
  let fixture: ComponentFixture<NumberButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
