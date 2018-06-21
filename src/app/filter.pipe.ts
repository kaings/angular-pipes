import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchedStatus: string, propName: string): any {
    const newValueArray = [];

    if (value.length === 0 || searchedStatus === '') {
      return value;
    }

    for (const val of value) {
      if (val[propName] === searchedStatus || val[propName].indexOf(searchedStatus) > -1) {
        newValueArray.push(val);
      }
    }
    return newValueArray;
  }

}
