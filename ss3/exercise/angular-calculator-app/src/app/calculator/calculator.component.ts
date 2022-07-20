import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  number1 = 0;
  number2 = 0;
  total1: number;
  constructor() { }

  ngOnInit(): void {
  }
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
