import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[formatNumber]'
})
export class FormatNumberDirective {

  @Input('formatNumber') num: any;

  transform(value: any, args?: any): any {
    value = typeof value == 'number' ? `${value}` : value;

    let num = (value && value.replace(/,/g,'')) || '';

    // if not valid number then just return passed one
    if (!/^-?\d*.\d*$/.test(num)) return value;

    let parts = num.toString().split(".");

    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    return parts.join('.');  
  }

  parse(value: string, fractionSize: number = 2): string {
    let [integer, fraction = ''] = (value || '').split('.');

    integer = integer.replace(new RegExp(',', 'g'), '');

    fraction = parseInt(fraction, 10) > 0 && fractionSize > 0 ? `.${(fraction + '000000').substring(0, fractionSize)}` : '';

    return integer + fraction;
  }

  constructor(public el: ElementRef) {}

  ngOnInit() {
    setTimeout(() => this.el.nativeElement.value = this.transform(this.el.nativeElement.value));
  }

  @HostListener('keypress', ['$event']) onkeypress(e) {
    if (!/^[0-9\.]$/.test(e.key)) e.preventDefault();
  }

  @HostListener('blur') onkeyup() {
    let value = this.el.nativeElement.value;

    this.el.nativeElement.value = this.transform(value);
  }  

  @HostListener('focus') onblur() {
    let value = this.el.nativeElement.value;

    this.el.nativeElement.value = this.parse(value);
  }   
}
