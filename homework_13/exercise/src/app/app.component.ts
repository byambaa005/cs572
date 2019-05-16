import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['']
})
export class AppComponent {
  title = 'exercise';

  defaultParent: number = 10;
  defaultSecondParent: number = 5;

  showOutputData(data){
    this.defaultParent = data;
  }

  showOutputSecondData(data){
    this.defaultSecondParent = data;
  }
}
