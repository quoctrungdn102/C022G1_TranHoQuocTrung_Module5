import {Injectable} from '@angular/core';
import {Facility} from "../model/facility";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TypeFacility} from "../model/type-facility";




@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  constructor(private http: HttpClient) {
  }

  createFacility(facility): Observable<Facility>{
    console.log(facility)
    return  this.http.post<Facility>('http://localhost:3000/list-facility',facility);
  }

  getFacilityAll(): Observable<Facility>{
    return this.http.get<Facility>('http://localhost:3000/list-facility');

  }
  editFacility(id:number,facility): Observable<Facility>{
    return this.http.put<Facility>('http://localhost:3000/list-facility/'+ id,facility);
  }

  findById(id:number) : Observable<Facility> {
    // return this.http.get<Facility>('http://localhost:3000/list-facility?idFacility='+idbFactory);
    return this.http.get<Facility>('http://localhost:3000/list-facility/'+id);
  }

  deleteFacility(id:number)  : Observable<Facility> {
    return this.http.delete<Facility>('http://localhost:3000/list-facility/'+id);
  }
  getTypeFacilityAll(): Observable<TypeFacility>{
     return this.http.get<TypeFacility>('http://localhost:3000/type-facility');
  }
}
