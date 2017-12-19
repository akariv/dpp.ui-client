import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {StepModel} from "../step-model";

@Component({
  selector: 'app-step-base',
  templateUrl: './step-base.component.html',
  styleUrls: ['./step-base.component.css']
})
export class StepBaseComponent implements OnInit {

  @Input('model') model: StepModel;
  @Output('changed') changed = new EventEmitter<boolean>();

  private url: string;

  constructor() {}

  onChanged() {
    this.model.bumpRevision();
    this.changed.emit(true);
  }

  ngOnInit() {
  }
}
