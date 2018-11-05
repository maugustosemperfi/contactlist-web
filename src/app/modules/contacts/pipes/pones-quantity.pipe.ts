import { Pipe, PipeTransform } from '@angular/core';
import { Phone } from '@shared/models/phone.model';

@Pipe({
  name: 'ponesQuantity'
})
export class PonesQuantityPipe implements PipeTransform {

  transform(value: Phone[], args?: any): any {
    return value.length;
  }

}
