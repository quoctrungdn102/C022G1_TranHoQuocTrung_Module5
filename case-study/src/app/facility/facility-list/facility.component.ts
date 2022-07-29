import {Component, OnInit} from '@angular/core';
import {Facility} from "../model/facility";
import {FacilityService} from "../service/facility.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css'],
})
export class FacilityComponent implements OnInit {
  facilities: any;
  name: string;


  constructor(private facilityService: FacilityService, private router: Router) {
  }


  ngOnInit(): void {
    this.facilityService.getFacilityAll().subscribe(data => {
      this.facilities = data
    });
  }

  id: number;
  idFacility: string;

  getId(id: number, idbFactory: string) {
    this.id = id;
    this.idFacility = idbFactory
  }

  delete(id: number) {
    console.log(id)
    this.facilityService.deleteFacility(id).subscribe();
    this.facilityService.getFacilityAll().subscribe(data => {
      this.facilities = data
    })
  }

  getName() {

    let arr: Facility[] = [];
    this.facilities.forEach(temp => {
      if (temp.nameFacility.includes(this.name)) {
        arr.push(temp)
      }
    })
    this.facilities = arr
    console.log(this.facilities)
  }

  getString(value: String) {
    this.facilityService.getFacilityAll().subscribe(data => {
      this.facilities = data
      this.name = value.toLocaleLowerCase();
      let arr: Facility[] = [];
      this.facilities.forEach(temp => {
        if (temp.nameFacility.toLocaleLowerCase().includes(this.name)) {
          arr.push(temp)
        }
      })
      this.facilities = arr
      console.log(this.facilities)

    });

    // console.log(this.name)
  }
}
