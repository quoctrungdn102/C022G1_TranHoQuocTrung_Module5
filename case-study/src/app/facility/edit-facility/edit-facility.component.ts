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
  typeFacility:any
  facilityForm : FormGroup  = new FormGroup({
    id: new FormControl(),
    idFacility: new FormControl(),
    nameFacility: new FormControl(),
    areaFacility: new FormControl(),
    costFacility: new FormControl(),
    peopleFacility: new FormControl(),
    typeFacility: new FormGroup({
      id : new FormControl(),
      nameTypeFacility: new FormControl()
    }),
    roomStandard: new FormControl(),
    other: new FormControl(),
    areaPool: new FormControl(),
    floor: new FormControl(),
    freeAttachService: new FormControl(),
  });


  constructor(private activatedRoute: ActivatedRoute, private FacilityService: FacilityService,private router : Router) {
  }

  facility: any


  ngOnInit(): void {
    this.FacilityService.getTypeFacilityAll().subscribe(data=>{
      this.typeFacility = data
      console.log("111111111111111111111111111111111111111111111111")
      console.log(data)
    })

    const idFacility = this.activatedRoute.snapshot.params.id;
    console.log(idFacility)
    this.FacilityService.findById(idFacility).subscribe(data => {
      this.facility = data;
      // console.log(this.facility)
      this.facilityForm.patchValue(this.facility);
      // this.facilityForm = new FormGroup({
      //   id: new FormControl(this.facility.id),
      //   idFacility: new FormControl(this.facility.idFacility),
      //   nameFacility: new FormControl(this.facility.nameFacility),
      //   areaFacility: new FormControl(this.facility.areaFacility),
      //   costFacility: new FormControl(this.facility.costFacility),
      //   peopleFacility: new FormControl(this.facility.peopleFacility),
      //   typeFacility: new FormGroup({
      //
      //   }),
      //   roomStandard: new FormControl(this.facility.facility),
      //   other: new FormControl(this.facility.other),
      //   areaPool: new FormControl(this.facility.areaPool),
      //   floor: new FormControl(this.facility.floor),
      //   freeAttachService: new FormControl(this.facility.freeAttachService),
      // })
    });
  }


  Edit() {

    const facility = this.facilityForm.value

    // let id: number;
    // id = Number(facility.typeFacility.id);
    this.typeFacility.forEach(data=>{
      if (Number(facility.typeFacility.id) == data.id){
       facility.typeFacility = data;
       console.log(data)
      }
    })
    this.FacilityService.editFacility(facility.id,facility).subscribe(data=>{
    })
    this.router.navigateByUrl('/facilityList')
  }
}
