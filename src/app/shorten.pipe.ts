import {PipeTransform, Pipe} from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {
  transform(val: any, lim: number) {
    return (val.length > lim) ?
      (val.substr(0, lim) + ' ... ') : val;
  }
}
