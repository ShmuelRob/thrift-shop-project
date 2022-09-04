import { Pipe, PipeTransform } from '@angular/core';
import Phone from 'src/models/phone.type';

@Pipe({
  name: 'phoneStyle'
})
export class PhoneStylePipe implements PipeTransform {

  transform(value: Phone): string {
    return `${value.areaCode}-${value.number}`;
  }

}
