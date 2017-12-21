import { Injectable } from '@angular/core';
import {Subject, Observable, BehaviorSubject} from "rxjs";
import {ServerEventsService} from "./server-events.service";
import { switchMap, debounceTime } from 'rxjs/operators';
import {StepModel} from "./step-model";

export interface ResultType {
  uuid: string;
  e: string;
  data: any;
  idx: number;
  field: string;
  msg: string;
}

@Injectable()
export class ExecutionSupervisorService {

  private executionConfig: Subject<Array<StepModel>>;
  private executionResults: Observable<ResultType>;
  public results: BehaviorSubject<any>;

  constructor(
    private serverEventsService: ServerEventsService
  ) {
    this.executionConfig = new Subject<Array<StepModel>>();
    this.results = new BehaviorSubject<any>({});

    console.log('ExecutionSupervisorService');
    this.executionResults = this.executionConfig
      .pipe(//debounceTime(300),
        switchMap((config) => {
          console.log('Go Server!');
          return this.serverEventsService.run(config);
        })
      );
    this.executionResults.subscribe((row) => {
      this.results.next(row);
    })
  }

  start(config: Array<StepModel>): Observable<ResultType> {
    console.log('Start!', config);
    this.executionConfig.next(config);
    return this.executionResults;
  }

  download(config: Array<StepModel>) {
    this.serverEventsService.download(config);
  }

}
