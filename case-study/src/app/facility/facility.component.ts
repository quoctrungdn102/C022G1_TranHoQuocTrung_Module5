import {Component, OnInit} from '@angular/core';
import {Facility} from "../facility";

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {
  facility: Facility = {};
  facilities: Facility[] = [
    {
      nameFacility:  'vila1',
      areaFacility:   1 ,
      costFacility: 20000,
      peopleFacility: 5,
      typeFacility: 'vip',
      roomStandard: 'hướng ra biển',
      other:'không',
      areaPool: 20,
      floor: 3,
      freeAttachService:'không'
    },
    {
      nameFacility:  'vila1',
      areaFacility:   1 ,
      costFacility: 20000,
      peopleFacility: 5,
      typeFacility: 'vip',
      roomStandard: 'hướng ra biển',
      other:'không',
      areaPool: 20,
      floor: 3,
      freeAttachService:'không'
    },
    {
      nameFacility:  'vila1',
      areaFacility:   1 ,
      costFacility: 20000,
      peopleFacility: 5,
      typeFacility: 'vip',
      roomStandard: 'hướng ra biển',
      other:'không',
      areaPool: 20,
      floor: 3,
      freeAttachService:'không'
    }
  ];

  constructor() {
  }


  ngOnInit()
    :
    void {
  }

  received(value: any) {
    console.log(value)
  }
}
