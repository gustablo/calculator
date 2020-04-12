import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogicButtonsComponent } from './logic-buttons.component';

describe('LogicButtonsComponent', () => {
  let component: LogicButtonsComponent;
  let fixture: ComponentFixture<LogicButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogicButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogicButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
