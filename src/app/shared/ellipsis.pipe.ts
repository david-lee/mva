import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis'
})
export class EllipsisPipe implements PipeTransform {

  transform(val: any, args?: any): any {
    let value = val || '';

    return !args || value.length <= args ? value : value.substring(0, args) + '...';
  }

}
