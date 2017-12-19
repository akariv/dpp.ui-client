import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepFilterComponent } from './step-filter.component';

describe('StepFilterComponent', () => {
  let component: StepFilterComponent;
  let fixture: ComponentFixture<StepFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
