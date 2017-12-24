import { Component, OnInit } from '@angular/core';
import {StepBaseComponent} from "../../step-base/step-base.component";

@Component({
  selector: 'app-step-filter',
  templateUrl: './step-filter.component.html',
  styleUrls: ['./step-filter.component.css']
})
export class StepFilterComponent extends StepBaseComponent implements OnInit {

  ops = [
    {code: 'is',  name: 'equal to'},
    {code: 'isnt',  name: 'not equal to'},
    {code: 'ge',  name: 'bigger than'},
    {code: 'lt',  name: 'smaller than'},
    {code: 'gte',  name: 'equal or bigger than'},
    {code: 'lte',  name: 'equal or smaller than'},
  ];

  constructor() {
    super();
  }

  ngOnInit() {
  }

  discreet(op: string) {
    return op == 'is' ||
           op == 'isnt';
  }
}
