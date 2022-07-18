import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-calculator-app';
  number1 = 0;
  number2 = 0;
  total1: number;

  plush() {
    this.total1 = (this.number1) + (this.number2);
  }

  subtraction() {
    this.total1 = (this.number1) - (this.number2);
  }

  multiplication() {
    this.total1 = (this.number1) * (this.number2);

  }

  division() {
    this.total1 = (this.number1) / (this.number2);
  }

  clear() {
    this.total1 = 0;
    this.number1 = 0;
    this.number2 = 0;
  }
}
