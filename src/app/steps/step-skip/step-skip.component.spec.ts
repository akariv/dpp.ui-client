import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepSkipComponent } from './step-skip.component';

describe('StepSkipComponent', () => {
  let component: StepSkipComponent;
  let fixture: ComponentFixture<StepSkipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepSkipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepSkipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
