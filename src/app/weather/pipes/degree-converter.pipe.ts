import { Pipe, PipeTransform } from '@angular/core';
import { DEGREE } from '../config/constants';

@Pipe({
  name: 'degree'
})
export class DegreeConverterPipe implements PipeTransform {

  transform(value: number, targetConversion: string): number {
    if(targetConversion === DEGREE.fahrenheit){
      return Math.ceil((value * 1.8) + 32);
    } else {
      return Math.ceil((value -32) * 5 / 9);
    }
  }

}
