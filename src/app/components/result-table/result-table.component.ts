import {Component, OnInit, Input} from '@angular/core';
import {RowArray, FieldDefArray, StepModel} from "../../step-model";
import * as octicons from "octicons"
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";

@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.less']
})
export class ResultTableComponent implements OnInit {

  @Input() model: StepModel;
  @Input() prefixHeader:  string;

  alertIcon: SafeHtml;

  constructor(private sanitizer: DomSanitizer) {
    this.alertIcon = this.sanitizer.bypassSecurityTrustHtml(octicons.alert.toSVG());
  }

  ngOnInit() {
  }

  extract(row, fieldName): string {
    let ret = row.data[fieldName].v;
    if (!ret) {
      return '<em>null</em>';
    }
    if (ret['type{date}']) {
      return `<span class='date'>${ret['type{date}']}</span>`;
    }
    if (ret['type{datetime}']) {
      return `<span class='date'>${ret['type{datetime}']}</span>`;
    }
    if (ret['type{time}']) {
      return `<span class='date'>${ret['type{time}']}</span>`;
    }
    if (ret['type{decimal}']) {
      return `<span class='decimal'>${ret['type{decimal}']}</span>`;
    }
    return JSON.stringify(ret);
  }
}
