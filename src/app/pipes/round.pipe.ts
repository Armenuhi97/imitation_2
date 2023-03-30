import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fixed'
})
export class RoundPipe implements PipeTransform {

  transform(value: number): number | string {
    if (value % 1 === 0) {
      return value;
    }
    return value.toFixed(2);
  }

}
