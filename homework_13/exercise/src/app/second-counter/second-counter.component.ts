import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-second-counter',
  templateUrl: './second-counter.component.html',
  styles: ['']
})
export class SecondCounterComponent implements OnInit {

  @Input() defaultValue: number;
  @Output() onValueChange = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  subtract() {
    this.defaultValue--;
    this.onValueChange.emit(this.defaultValue);
  }

  add() {
    this.defaultValue++;
    this.onValueChange.emit(this.defaultValue);
  }

}
