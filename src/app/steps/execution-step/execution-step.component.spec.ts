import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutionStepComponent } from './execution-step.component';

describe('ExecutionStepComponent', () => {
  let component: ExecutionStepComponent;
  let fixture: ComponentFixture<ExecutionStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecutionStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecutionStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
