import {Component, OnInit, ViewEncapsulation, Input} from '@angular/core';
import {StepModel} from "../../step-model";

@Component({
  selector: 'execution-step',
  templateUrl: './execution-step.component.html',
  styleUrls: ['./execution-step.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ExecutionStepComponent implements OnInit {

  @Input() model: StepModel;

  constructor() { }

  ngOnInit() {
  }

}
