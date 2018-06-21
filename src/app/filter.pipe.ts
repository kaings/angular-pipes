import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
  /* pure & impure... */
  /* pure='true' means ng only listen to ngModel (in this case) changes, any other changes on the page will not have immediate effect on the view */ // Default is TRUE
  /* pure='false' means other changes on the page besides ngModel (in this case) will also immediately effect the outcome of the view (cost higher memory performance) */
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
