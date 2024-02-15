import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'DOLLAR'
})
export class BxCurrencyPipe implements PipeTransform {

  transform(value: number): string {
    return '$' + value.toFixed(2);
  }

}
