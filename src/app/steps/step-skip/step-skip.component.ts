import { Component, OnInit } from '@angular/core';
import {StepBaseComponent} from "../../step-base/step-base.component";

@Component({
  selector: 'app-step-skip',
  templateUrl: './step-skip.component.html',
  styleUrls: ['./step-skip.component.css']
})
export class StepSkipComponent extends StepBaseComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
