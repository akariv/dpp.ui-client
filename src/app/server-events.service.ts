import {Injectable, NgZone, EventEmitter} from '@angular/core';
import {Observable} from "rxjs";
import {EventSourcePolyfill} from "ng-event-source"
import {HttpClient} from "@angular/common/http";
import {StepModel} from "./step-model";
import {ResultType} from "./execution-supervisor.service";

let SERVER = '';//http://localhost:8000';


@Injectable()
export class ServerEventsService {

  private zone: NgZone;
  private executionId: string = '';

  error: EventEmitter<string> = new EventEmitter();

  constructor(private http: HttpClient) {
    this.zone = new NgZone({enableLongStackTrace: false});
  }

  uploadConfig(config: Array<StepModel>): Observable<any> {
    let body = {
      actions: config.map((sm) => sm.getAction())
    };
    let suffix = this.executionId ? '?id='+this.executionId : '';
    return this.http.post(SERVER+'/config'+suffix, body);
  }

  run(config: Array<StepModel>): Observable<any> {

    let observable = Observable.create(observer => {

      let eventSource;
      this.uploadConfig(config)
        .subscribe(data => {
          console.log(data);
          this.error.emit(null);
          this.executionId = data['id'];
          try {
            eventSource = new EventSourcePolyfill(SERVER+'/events/'+this.executionId, {});
          } catch (e) {
            this.error.emit(e.message);
            observer.error(e);
          }
          eventSource.onmessage = x => {
            if (x.data !== 'close') {
              try {
                let parsed: ResultType = JSON.parse(x.data);
                if (parsed.e && parsed.e=='err' && parsed.uuid=='global') {
                  this.error.emit(parsed.msg);
                } else {
                  observer.next(parsed);
                }
              } catch (exception) {
                console.log('Warning - bad data received', x);
                throw exception;
              }
            } else {
              eventSource.close();
            }
          };
          eventSource.onerror = x => {
            this.error.emit(x.message);
            observer.error(x)
          }
        },
          (error) => {
            this.error.emit(error.message);
          });

      return () => {
        if (eventSource) {
          eventSource.close();
        }
      };
    });
    return observable;
  }

  download(config: Array<StepModel>) {
    if (this.executionId) {
      window.open(SERVER+'/download/'+this.executionId, '_blank');
    } else {
      this.uploadConfig(config)
        .subscribe((data) => {
          this.executionId = data['id'];
          window.open(SERVER+'/download/'+this.executionId, '_blank');
        });
    }
  }
}
