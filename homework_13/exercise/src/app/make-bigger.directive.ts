import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appMakeBigger]'
})
export class MakeBiggerDirective {

  constructor() { }

  @HostBinding("style.fontSize") fontSize = "18px";
  @HostListener("dblclick")  bigger() {
    console.log("here");
    this.fontSize = parseInt(this.fontSize) + 2  + "px";
  }

}
