import {PipeTransform, Pipe} from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {
  transform(val: any){
    return (val.length > 10) ? (val.substr(0, 10) + ' ... ') : val;
  }
}
