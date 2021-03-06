import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coler-picker',
  templateUrl: './coler-picker.component.html',
  styleUrls: ['./coler-picker.component.css']
})
export class ColerPickerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  color1 = '';
  color2 = '';
  color3 = '';
  color4 = '';


  getColorGreen(value: any) {
    if (value === true) {
      this.color1 = 'màu xanh';
    } else {
      this.color1 = '';
    }
  }

  getColorRed(value: any) {
    if (value === true) {
      this.color2 = 'màu đỏ';
    } else {
      this.color2 = '';
    }
  }

  getColorPrimary(value: any) {
    if (value === true) {
      this.color3 = 'màu tím';
    } else {
      this.color3 = '';
    }
  }

  getColorYellow(value: any) {
    if (value === true) {
      this.color4 = 'màu vàng';
    } else {
      this.color4 = '';
    }
  }

}
