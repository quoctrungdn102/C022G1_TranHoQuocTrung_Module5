import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {VeXe} from '../model/ve-xe';

@Injectable({
  providedIn: 'root'
})
export class VeXEService {

  constructor(private http: HttpClient) {
  }

  getAllStudent(): Observable<VeXe> {
    return this.http.get<VeXe>('http://localhost:8080/restControllerProduct/listProduct');
  }

  getAllClass(): Observable<VeXe> {
    return this.http.get<VeXe>('http://localhost:8080/restControllerProduct/lisCategory');
  }

  deleteStudent(id: number): Observable<VeXe> {
    return this.http.delete<VeXe>('http://localhost:3000/Student/' + id);
  }

  createStudent(veXe): Observable<VeXe> {
    return this.http.post<VeXe>('http://localhost:8080/restControllerProduct/themVeXe', veXe);
  }

  suaVeXe(id: number, student): Observable<VeXe> {
    return this.http.patch<VeXe>('http://localhost:3000/veXE/' + id, student);
  }

  tiemKiemVeXe(id: number): Observable<VeXe> {
    return this.http.get<VeXe>('http://localhost:8080/restControllerProduct/timVeXe/' + id);
  }

  tiemKiemDiemDi(name: string): Observable<VeXe> {
    return this.http.get<VeXe>('http://localhost:3000/veXE?diemDi_like=' + name);
  }

  tiemKiemDiemDen(name: string): Observable<VeXe> {
    return this.http.get<VeXe>('http://localhost:3000/veXE?diemDen_like=' + name);
  }
  Search(diemDen: string, diemDi: string): Observable<VeXe> {
    return this.http.get<VeXe>('http://localhost:8080/restControllerProduct/search/' + diemDen + '&' + diemDi);
  }

}
