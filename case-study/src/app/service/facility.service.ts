import {Injectable} from '@angular/core';
import {Facility} from "../model/facility";

@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  constructor() {
  }


  private _facilities: Facility[] = [
    {
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
  ];

  get facilities(): Facility[] {
    console.log(this._facilities);
    return this._facilities;
  }


  set facilities(value: Facility[]) {
    this._facilities = value;
  }

  createFacility(facility: Facility) {
    // console.log(facility)
    this._facilities.unshift(facility)
    console.log(this._facilities)
  }
}
