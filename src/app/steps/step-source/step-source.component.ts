import { Component, OnInit } from '@angular/core';
import {StepBaseComponent} from "../../step-base/step-base.component";
import {HttpClient} from "@angular/common/http";
import * as _ from 'lodash';

type PkgSource = {name: string, url: string};

@Component({
  selector: 'app-step-source',
  templateUrl: './step-source.component.html',
  styleUrls: ['./step-source.component.css']
})
export class StepSourceComponent extends StepBaseComponent implements OnInit {

  sources: PkgSource[] = null;

  constructor(private http: HttpClient) {
    super();
  }

  ngOnInit() {
    this.http.get('http://api.datahub.io/metastore/search?datahub.owner=%22core%22&size=10000')
      .subscribe((response: any) => {
        let entry: any;
        this.sources = [];
        for (entry of response.results) {
          let source: PkgSource = {name: null, url: null};
          source['name'] = entry.datapackage.title;
          for (let resource of entry.datapackage.resources) {
            if (resource['datahub']['type'] == 'derived/csv') {
              source['url'] = resource['path'];
              this.sources.push(source);
              break;
            }
          }
        }
        this.sources = _.sortBy(this.sources, 'name');
      })
  }

}
