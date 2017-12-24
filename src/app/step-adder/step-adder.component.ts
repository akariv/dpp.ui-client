import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {StepModel} from "../step-model";

@Component({
  selector: 'app-step-adder',
  templateUrl: './step-adder.component.html',
  styleUrls: ['./step-adder.component.css']
})
export class StepAdderComponent implements OnInit {

  @Output('addModel') addModel = new EventEmitter<StepModel>();
  @Output('download') download = new EventEmitter<boolean>();

  // private url: string = 'https://datahub.io/core/country-codes/r/country-codes.csv';
  private lastModel: StepModel = null;

  constructor() { }

  ngOnInit() {
    this.addUrl();
  }

  state() {
    let lastAction = this.lastModel == null ? null : this.lastModel.action.verb;
    if (lastAction == null) {
      return 'init';
    } else if (lastAction=='source' || lastAction=='skip') {
      return 'layout';
    } else if (lastAction=='mutate' || lastAction=='filter' || lastAction=='headers') {
      return 'processing';
    }
  }

  hasData() {
    return this.lastModel.rowcount > 0;
  }

  add(sm: StepModel) {
    this.lastModel = sm;
    this.addModel.emit(sm);
  }

  addUrl() {
    let sm = new StepModel('Select Data Source', 'source');
    sm.setOptions({});
    this.add(sm);
  }

  addSkip() {
    let sm = new StepModel('Skip Rows / Columns', 'skip');
    sm.setOptions({kind: 'rows', amount: 1});
    this.add(sm);
  }

  addHeaders() {
    let sm = new StepModel('Lock Headrs', 'headers');
    this.add(sm);
  }

  addSchema() {
    let sm = new StepModel('Set Data Types', 'mutate');
    sm.setOptions({kind: 'schema', field: null, options:{}});
    this.add(sm);
  }

  addFilter() {
    let sm = new StepModel('Filter Data', 'filter');
    sm.setOptions({kind: 'filter', field: null, value:null});
    this.add(sm);
  }

  addNop() {
    let sm = new StepModel('noop', 'noop');
    this.add(sm);
  }

  doDownload() {
    this.download.emit();
  }
}
