import { Component, OnInit } from '@angular/core';
import {StepModel} from "../step-model";
import {ExecutionSupervisorService, ResultType} from "../execution-supervisor.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-steps-container',
  templateUrl: './steps-container.component.html',
  styleUrls: ['./steps-container.component.css']
})
export class StepsContainerComponent implements OnInit {

  private models: Array<StepModel> = [];
  private results: Observable<ResultType>;
  private modelsByUuid: {[key: string]: StepModel} = {};

  constructor(
    private supervisor: ExecutionSupervisorService
  ) {
    this.supervisor.results.subscribe((result: ResultType) => {
      let uuid = result.uuid;
      let model = this.modelsByUuid[uuid];
      if (model) {
        model.events.next(result);
      }
    });
  }

  ngOnInit() {
  }

  addModel(model: StepModel) {
    if (this.models.length > 0) {
      model.setPrevious(this.models[this.models.length-1]);
    }
    this.models.push(model);
    this.modelsByUuid[model.getAction().uuid] = model;
    this.run();
  }

  onChanged() {
    this.run();
  }

  run() {
    this.supervisor.start(this.models);
  }

  download() {
    this.supervisor.download(this.models);
  }
}
