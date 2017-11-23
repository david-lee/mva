import { Directive, Input, OnChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators } from '@angular/forms';
import * as moment from 'moment';
import { environment } from '../../environments/environment';

export function forbiddenDobValidator(dob: string): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const forbidden = moment(moment(dob).format(environment.dateFormat)).isAfter(new Date());
    return forbidden ? {'forbiddenDob': {value: control.value}} : null;
  };
}

@Directive({
  selector: '[forbiddenDob]',
  providers: [{provide: NG_VALIDATORS, useExisting: ForbiddenDobDirective, multi: true}]
})
export class ForbiddenDobDirective implements Validator {

  validate(control: AbstractControl): {[key: string]: any} {
    return forbiddenDobValidator(control.value)(control);
  }

}
