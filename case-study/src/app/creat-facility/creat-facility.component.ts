import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Facility} from "../facility";

@Component({
  selector: 'app-creat-facility',
  templateUrl: './creat-facility.component.html',
  styleUrls: ['./creat-facility.component.css']
})
export class CreatFacilityComponent implements OnInit {
  @Output()
  eventEmitter = new EventEmitter()

  constructor() {
  }

  ngOnInit(): void {
  }

  facility: Facility = {};

  onSubmit(createFacility: NgForm) {
    // console.log(createFacility.value)
    this.facility = createFacility.value;

  }

  send(): void {

    this.eventEmitter.emit(this.facility)
  }

}
