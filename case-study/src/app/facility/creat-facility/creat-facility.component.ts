import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FacilityService} from "../service/facility.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-creat-facility',
  templateUrl: './creat-facility.component.html',
  styleUrls: ['./creat-facility.component.css'],
})
export class CreatFacilityComponent implements OnInit {
  constructor(private facilityService: FacilityService,private router: Router) {
  }
  typeFacilities: any

  ngOnInit(): void {
     this.facilityService.getTypeFacilityAll().subscribe(data=>{
       this.typeFacilities = data
       console.log(this.typeFacilities)
     })
  }

  contractForm = new FormGroup({
    idFacility: new FormControl("DV-1212",Validators.required),
    nameFacility: new FormControl("Vila 12",Validators.required),
    areaFacility: new FormControl(100,Validators.required),
    costFacility: new FormControl(200,Validators.required),
    peopleFacility: new FormControl(10,Validators.required),
    typeFacility: new FormControl(),
    roomStandard: new FormControl("VIP",Validators.required),
    other: new FormControl("Ha Noi",Validators.required),
    areaPool: new FormControl(50,Validators.required),
    floor: new FormControl(10,Validators.required),
    freeAttachService: new FormControl("Cafe",Validators.required),
  })


  onSubmit() {
    console.log("---------------------------------")
    console.log(this.contractForm.value);


    this.facilityService.createFacility(this.contractForm.value).subscribe(data =>{
      console.log(data)
    });
    this.router.navigateByUrl('/facilityList')
  }


}
