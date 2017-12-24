import {Subject} from "rxjs";
import {ResultType} from "./execution-supervisor.service";

import * as _ from 'lodash';

export type RowArray = Array<{idx: number, data: any}>;
export type FieldDefArray = Array<{type: string, name: string}>;

export class StepModel {

  state = 'pending';
  uuid: string;
  rows: RowArray = [];
  rowcount = null;
  badrowcount = null;
  revision = 0;
  last = false;
  title = "";
  error: string;

  public action: {verb: string; uuid: string, options?: any};
  public schema: FieldDefArray = null;

  public prev: StepModel;
  public events = new Subject<ResultType>();

  constructor(title: string, verb: string) {
    this.title = title;
    this.uuid = StepModel.genUUID();
    verb = verb || 'noop';
    this.action = {
      verb: verb,
      uuid: this.uuid,
      options: {
        revision: 0
      }
    };
    this.events.subscribe((rt: ResultType) => {
      if (rt.e == 'start') {
        this.state = 'in-progress';
        this.rows = [];
        this.rowcount = 0;
        this.badrowcount = 0;
        this.error = null;
      } else if (rt.e == 'err') {
        if (!this.error) {
          this.error = '';
        }
        this.error += rt.msg + '<br/>';
      } else if (rt.e == 'done') {
        this.state = 'done'
      } else if (rt.e == 'r') {
        if (rt.idx >= this.rowcount) {
          let data = _.mapValues(rt.data, (v_) => {
            return {v: v_};
          });
          this.rows.push({idx: rt.idx + 1, data: data})
          this.rowcount = rt.idx + 1;
        }
      } else if (rt.e == 've') {
        this.badrowcount += 1;
        if (rt.idx >= this.rowcount) {
          let data = _.mapValues(rt.data, (v_) => {return {v: v_};});
          if (data[rt.field]) {
            data[rt.field].klass = 'error';
          }
          this.rows.push({idx: rt.idx + 1, data: data})
          this.rowcount = rt.idx + 1;
        }
      } else if (rt.e == 'rs') {
        this.schema = rt.data;
      }
    });
  }

  private static genUUID() {
    return Math.floor((1 + Math.random()) * 0x1000000)
      .toString(16)
      .substring(1)
  }

  getAction() {
    return this.action;
  }

  setOptions(options: any) {
    this.action.options = options;
    options.revision = this.revision;
  }

  setPrevious(prev: StepModel) {
    this.prev = prev;
  }

  bumpRevision() {
    this.action.options.revision += 1;
  }

  setLast(v: boolean) {
    if (this.last != v) {
      this.last = v;
      if (this.prev) {
        this.prev.setLast(false);
      }
    }
  }
}