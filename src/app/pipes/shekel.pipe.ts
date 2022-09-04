import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shekel'
})
export class ShekelPipe implements PipeTransform {

  transform(value: number): string {
    return `${value}₪`;
  }

}
