import {Component, OnInit, Input} from '@angular/core';
import {RowArray, FieldDefArray} from "../../step-model";

@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.css']
})
export class ResultTableComponent implements OnInit {

  @Input() rows: RowArray;
  @Input() schema:  FieldDefArray;
  @Input() prefixHeader:  string;

  constructor() { }

  ngOnInit() {
  }

}
