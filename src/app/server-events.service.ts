import {Injectable, NgZone} from '@angular/core';
import {Observable} from "rxjs";
import {EventSourcePolyfill} from "ng-event-source"
import {HttpClient} from "@angular/common/http";
import {StepModel} from "./step-model";

@Injectable()
export class ServerEventsService {

  private zone: NgZone;
  private executionId: string = '';

  constructor(private http: HttpClient) {
    this.zone = new NgZone({enableLongStackTrace: false});
  }

  uploadConfig(config: Array<StepModel>): Observable<any> {
    let body = {
      actions: config.map((sm) => sm.getAction())
    };
    let suffix = this.executionId ? '?id='+this.executionId : '';
    return this.http.post('http://localhost:8000/config'+suffix, body);
  }

  run(config: Array<StepModel>): Observable<any> {

    let observable = Observable.create(observer => {

      let eventSource;
      this.uploadConfig(config)
        .subscribe(data => {
          console.log(data);
          this.executionId = data['id'];
          eventSource = new EventSourcePolyfill('http://localhost:8000/events/'+this.executionId, {});
          eventSource.onmessage = x => {
            if (x.data !== 'close') {
              try {
                let parsed = JSON.parse(x.data);
                observer.next(parsed);
              } catch (exception) {
                console.log('Warning - bad data received', x);
                throw exception;
              }
            } else {
              eventSource.close();
            }
          };
          eventSource.onerror = x => observer.error(x);
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
      window.open('http://localhost:8000/download/'+this.executionId, '_blank');
    } else {
      this.uploadConfig(config)
        .subscribe((data) => {
          this.executionId = data['id'];
          window.open('http://localhost:8000/download/'+this.executionId, '_blank');
        });
    }
  }
}
