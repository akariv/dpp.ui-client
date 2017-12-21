import {Component, OnInit, Input} from '@angular/core';
import {RowArray, FieldDefArray, StepModel} from "../../step-model";

@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.less']
})
export class ResultTableComponent implements OnInit {

  @Input() model: StepModel;
  @Input() prefixHeader:  string;

  constructor() { }

  ngOnInit() {
  }

  extract(row, fieldName): string {
    let ret = row.data[fieldName].v;
    if (ret['type{date}']) {
      return `<span class='date'>${ret['type{date}']}</span>`;
    }
    if (ret['type{decimal}']) {
      return `<span class='decimal'>${ret['type{decimal}']}</span>`;
    }
    return JSON.stringify(ret);
  }
}
