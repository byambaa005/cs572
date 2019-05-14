import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styles: ['']
})
export class CounterComponent implements OnInit {

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
