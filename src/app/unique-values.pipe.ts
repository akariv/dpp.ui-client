import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'uniqueValues',
  pure: false
})
export class UniqueValuesPipe implements PipeTransform {

  transform(value: Array<any>, fieldName: string): any {
    console.log('VVV', fieldName, value);
    if (value) {
      let ret = _(value)
        .map((v) => _.get(v, 'data.'+fieldName+'.v'))
        .sort()
        .sortedUniq()
        .value();
      console.log('^^^', ret);
      return ret;
    }
    return value;
  }

}