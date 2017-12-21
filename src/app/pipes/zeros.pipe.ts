import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zeros'
})
export class ZerosPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let ret='' + value;
    while (ret.length < args) {
      ret = '0' + ret;
    }
    return ret;
  }

}
