import { Component, OnInit } from '@angular/core';
import {StepBaseComponent} from "../../step-base/step-base.component";

@Component({
  selector: 'app-step-filter',
  templateUrl: './step-filter.component.html',
  styleUrls: ['./step-filter.component.css']
})
export class StepFilterComponent extends StepBaseComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
