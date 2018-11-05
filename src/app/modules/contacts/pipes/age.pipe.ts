import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    if (!value) {
      return 0;
    }
    const today: Date = new Date();
    const dateValue = new Date(value);
    const diff = Math.abs(dateValue.getTime() - today.getTime());
    const diffYear = Math.floor(diff / (1000 * 3600 * 24 * 365));
    return diffYear;
  }

}
