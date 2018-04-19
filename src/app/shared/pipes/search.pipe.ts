import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], field: string, value: string): any {
    if (!items) {
      return [];
    }

    if (!value) {
      return items;
    }

    const PATTERN = new RegExp(value, 'i');
    return items.filter(item => item[field].match(PATTERN));
  }

}
