import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {FacilityService} from "../service/facility.service";

@Component({
  selector: 'app-edit-facility',
  templateUrl: './edit-facility.component.html',
  styleUrls: ['./edit-facility.component.css']
})
export class EditFacilityComponent implements OnInit {
  // facilityForm : FormGroup;
  facilityForm = new FormGroup({
    id: new FormControl(),
    idFacility: new FormControl(),
    nameFacility: new FormControl(),
    areaFacility: new FormControl(),
    costFacility: new FormControl(),
    peopleFacility: new FormControl(),
    typeFacility: new FormControl(),
    roomStandard: new FormControl(),
    other: new FormControl(),
    areaPool: new FormControl(),
    floor: new FormControl(),
    freeAttachService: new FormControl(),
  })

  constructor(private activatedRoute: ActivatedRoute, private FacilityService: FacilityService,private router : Router) {
  }

  facility: any


  ngOnInit(): void {
    const idFacility = this.activatedRoute.snapshot.params.id;
    console.log(idFacility)
    this.FacilityService.findById(idFacility).subscribe(data => {
      this.facility = data;
      console.log(this.facility)
      this.facilityForm.patchValue(this.facility);
    });
  }


  Edit() {
    const facility = this.facilityForm.value
    this.FacilityService.editFacility(facility.id,facility).subscribe(data=>{
      console.log(data)
    })
    this.router.navigateByUrl('/facilityList')
  }
}
