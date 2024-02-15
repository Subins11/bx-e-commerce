import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Rating'
})
export class BxRatingPipe implements PipeTransform {

  transform(value: number): string {
    let stars = '';
    for (let i = 0; i < 5; i++) {
      if (i < value) {
        stars += '★';
      } else {
        stars += '☆'; 
      }
    }
    return stars;
  }

}
