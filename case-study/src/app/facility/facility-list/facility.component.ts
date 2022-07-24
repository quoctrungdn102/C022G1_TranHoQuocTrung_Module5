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


  constructor(private facilityService: FacilityService, private router: Router) {
  }


  ngOnInit(): void {
    this.facilityService.getFacilityAll().subscribe(data => {
      this.facilities = data
      console.log(this.facilities)

    });
  }

  id: number;

  getId(id: number) {
    this.id = id;
  }

  // delete(id: number) {
  //   console.log(id)
  //   this.facilityService.deleteFacility(id).subscribe();
  //   // this.router.navigateByUrl('facilityList')
  //   this.facilityService.getFacilityAll().subscribe(data => {
  //     this.facilities = data
  //   })
  // }
}
