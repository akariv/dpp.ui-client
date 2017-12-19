import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepMutateComponent } from './step-mutate.component';

describe('StepMutateComponent', () => {
  let component: StepMutateComponent;
  let fixture: ComponentFixture<StepMutateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepMutateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepMutateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
