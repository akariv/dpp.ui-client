import { Component, OnInit } from '@angular/core';
import {StepBaseComponent} from "../../step-base/step-base.component";

@Component({
  selector: 'app-step-mutate',
  templateUrl: './step-mutate.component.html',
  styleUrls: ['./step-mutate.component.css']
})
export class StepMutateComponent extends StepBaseComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

  set trueValues(v: string) {
    console.log('set trueValues ->', v);
    if (v) {
      this.model.action.options.options['trueValues'] = v.split(',');
    } else {
      delete this.model.action.options.options['trueValues'];
    }
  }

  get trueValues(): string {
    if (this.model.action.options.options['trueValues']) {
      return this.model.action.options.options['trueValues'].join(',');
    } else {
      return '';
    }
  }

  set falseValues(v: string) {
    if (v) {
      this.model.action.options.options['falseValues'] = v.split(',');
    } else {
      delete this.model.action.options.options['falseValues'];
    }
  }

  get falseValues(): string {
    if (this.model.action.options.options['falseValues']) {
      return this.model.action.options.options['falseValues'].join(',');
    } else {
      return '';
    }
  }

}
