import {Component, Input, OnInit} from '@angular/core';
import {FacilityService} from "../service/facility.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-delete-facility',
  templateUrl: './delete-facility.component.html',
  styleUrls: ['./delete-facility.component.css']
})
export class DeleteFacilityComponent implements OnInit {

  constructor(private facilityService: FacilityService, private router: Router) {
  }


  @Input() id: number

  ngOnInit(): void {
  }

  delete(id: number) {
    console.log(id)
    this.facilityService.deleteFacility(id).subscribe(data=>{
      console.log(data)
    });
    this.router.navigateByUrl('/facilityList')
  }
}
