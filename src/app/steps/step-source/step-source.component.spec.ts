import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepSourceComponent } from './step-source.component';

describe('StepSourceComponent', () => {
  let component: StepSourceComponent;
  let fixture: ComponentFixture<StepSourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepSourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
