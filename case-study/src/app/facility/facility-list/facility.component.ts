import {Component, OnInit} from '@angular/core';
import {Facility} from "../model/facility";
import {FacilityService} from "../service/facility.service";

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css'],
})
export class FacilityComponent implements OnInit {
  facilities: any;


  constructor(private _facilityService: FacilityService) {
  }


  ngOnInit(): void {
     this._facilityService.getFacilityAll().subscribe(data=> {
       this.facilities = data
     });
  }

}
