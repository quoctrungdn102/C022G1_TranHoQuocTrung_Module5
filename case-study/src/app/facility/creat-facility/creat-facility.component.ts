import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {FacilityService} from "../service/facility.service";

@Component({
  selector: 'app-creat-facility',
  templateUrl: './creat-facility.component.html',
  styleUrls: ['./creat-facility.component.css'],
})
export class CreatFacilityComponent implements OnInit {
  constructor(private _facilityService: FacilityService) {

  }

  ngOnInit(): void {
  }

  contractForm = new FormGroup({
    idFacility: new FormControl(),
    nameFacility: new FormControl("Hung"),
    areaFacility: new FormControl(100),
    costFacility: new FormControl(200),
    peopleFacility: new FormControl(10),
    typeFacility: new FormControl("House"),
    roomStandard: new FormControl("VIP"),
    other: new FormControl("Ha Noi"),
    areaPool: new FormControl(50),
    floor: new FormControl(10),
    freeAttachService: new FormControl("Cafe"),
  })


  onSubmit() {
    console.log(this.contractForm.value);
    const facility1 =    {
      idFacility: 16,
      nameFacility: "vila1",
      areaFacility: 1,
      costFacility: 2000,
      peopleFacility: 5,
      typeFacility: 'vip',
      roomStandard: 'hướng ra biển',
      other: 'không',
      areaPool: 20,
      floor: 3,
      freeAttachService: 'không'
    }

    this._facilityService.createFacility(this.contractForm.value).subscribe(data =>{
      console.log(data)
    });
    this.contractForm.reset();
  }


}
