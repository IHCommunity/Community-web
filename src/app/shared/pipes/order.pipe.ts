import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(items: any[], args?: any): any {
    if (!items) {
    return [];
    }

    items.sort( (a, b) => b.orderTypeNumber - a.orderTypeNumber);

    return items;
  }

}
