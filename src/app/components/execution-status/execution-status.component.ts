import {Component, OnInit, Input} from '@angular/core';
import {StepModel} from "../../step-model";

@Component({
  selector: 'app-execution-status',
  templateUrl: './execution-status.component.html',
  styleUrls: ['./execution-status.component.less']
})
export class ExecutionStatusComponent implements OnInit {

  @Input() model: StepModel;

  constructor() { }

  ngOnInit() {
  }

}
