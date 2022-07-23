import {Injectable} from '@angular/core';
import {Facility} from "../model/facility";
import {HttpClient, HttpClientModule, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";




@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  constructor(private http: HttpClient) {
  }


  private _facilities: Facility[] = [
    {
      idFacility: 1,
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
  // facility: any = {
  //   "idFacility": 1,
  //   "nameFacility": "vila1",
  //   "areaFacility": 1,
  //   "costFacility": 2000,
  //   "peopleFacility": 10,
  //   "typeFacility": "vip",
  //   "roomStandard": "hướng ra biển",
  //   "other": "không",
  //   "areaPool": 20,
  //   "floor": 3,
  //   "freeAttachService": "không"
  // }

  createFacility(facility): Observable<Facility>{
    console.log(facility)

    // console.log(facility-list)
    // const  httpHeader = new HttpHeaders();
    // httpHeader.append('content-type','application/json')
    return  this.http.post<Facility>('http://localhost:3000/list-facility',facility);
    // this._facilities.unshift(facility)
  }

  getFacilityAll(): Observable<Facility>{
    return this.http.get<Facility>('http://localhost:3000/list-facility');

  }
}
