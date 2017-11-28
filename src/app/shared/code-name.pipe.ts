import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment';
import * as _ from 'lodash';

@Pipe({
  name: 'codeName'
})
export class CodeNamePipe implements PipeTransform {

  transform(value: string, target?: any): any {
    // TODO should be fixed not to convert to string after API is changed
    let code = ''+value;
    code = code.toUpperCase() == 'PQ' ? 'QC' : code;
    
    return _.find(environment.lookups[target], {value: code}).label;
  }

}
