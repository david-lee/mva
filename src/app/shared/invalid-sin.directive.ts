import { Directive, Input, OnChanges, forwardRef } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators } from '@angular/forms';
import * as moment from 'moment';
import { environment } from '../../environments/environment';

export function validator(sin: string): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    let check, even, tot, arrSin, result;

    // convert to an array & pop off the check digit
    arrSin = sin.split('');
    check = +arrSin.pop();

    even = arrSin
      // take the digits at the even indices
      .filter(function (_, i) { return i % 2; })
      // multiply them by two
      .map(function (n) { return n * 2; })
      // and split them into individual digits
      .join('').split('');

    tot = arrSin
      // take the digits at the odd indices
      .filter(function (_, i) { return !(i % 2); })
      // concatenate them with the transformed numbers above
      .concat(even)
      // it's currently an array of strings; we want numbers
      .map(function (n) { return +n; })
      // and take the sum
      .reduce(function (acc, cur) { return acc + cur; });

    // compare the result against the check digit
    result = check === (10 - (tot % 10)) % 10;

    return !result ? {'invalidSin': {value: control.value}} : null;
  };
}

@Directive({
  selector: '[invalidSin]',
  providers: [{provide: NG_VALIDATORS, useExisting: forwardRef(() => InvalidSinDirective), multi: true}]
})
export class InvalidSinDirective implements Validator {

  validate(control: AbstractControl): {[key: string]: any} {
    return control.value && control.value.length === 9 ? validator(control.value)(control) : null;
  }

}
