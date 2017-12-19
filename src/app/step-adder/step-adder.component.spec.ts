import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepAdderComponent } from './step-adder.component';

describe('StepAdderComponent', () => {
  let component: StepAdderComponent;
  let fixture: ComponentFixture<StepAdderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepAdderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepAdderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
