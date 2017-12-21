import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {StepModel} from "../step-model";

@Component({
  selector: 'app-step-adder',
  templateUrl: './step-adder.component.html',
  styleUrls: ['./step-adder.component.css']
})
export class StepAdderComponent implements OnInit {

  @Output('addModel') addModel = new EventEmitter<StepModel>();

  // private url: string = 'https://datahub.io/core/country-codes/r/country-codes.csv';
  private lastAction: string = null;

  constructor() { }

  ngOnInit() {
    this.addUrl();
  }

  state() {
    if (this.lastAction == null) {
      return 'init';
    } else if (this.lastAction=='source' || this.lastAction=='skip') {
      return 'layout';
    } else if (this.lastAction=='mutate' || this.lastAction=='filter' || this.lastAction=='headers') {
      return 'processing';
    }
  }

  add(sm: StepModel) {
    this.lastAction = sm.action.verb;
    this.addModel.emit(sm);
  }

  addUrl() {
    let sm = new StepModel('source');
    sm.setOptions({});
    this.add(sm);
  }

  addSkip() {
    let sm = new StepModel('skip');
    sm.setOptions({kind: 'rows', amount: 1});
    this.add(sm);
  }

  addHeaders() {
    let sm = new StepModel('headers');
    this.add(sm);
  }

  addSchema() {
    let sm = new StepModel('mutate');
    sm.setOptions({kind: 'schema', field: null, options:{}});
    this.add(sm);
  }

  addFilter() {
    let sm = new StepModel('filter');
    sm.setOptions({kind: 'filter', field: null, value:null});
    this.add(sm);
  }

  addNop() {
    let sm = new StepModel();
    this.add(sm);
  }
}
