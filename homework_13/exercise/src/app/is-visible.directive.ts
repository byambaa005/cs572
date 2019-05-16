import {Directive, ElementRef, HostBinding, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appIsVisible]'
})
export class IsVisibleDirective {

  @Input() isInvisible: boolean;

  constructor() { }

  @HostBinding('style.display') display;

  ngOnInit() {
    if (this.isInvisible === true) {
      this.display = 'none';
    } else {
      this.display = 'block';
    }
  }

}
