import {Directive, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appMakeBigger]'
})
export class MakeBiggerDirective {

  @Input() fontSize: string = '2px';

  constructor() { }

  @HostBinding('style.fontSize') size;

  ngOnInit() {
    this.size = this.fontSize + ""
  }

}
