import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../model/product';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private  http: HttpClient) {
  }

  getListProduct(): Observable<Product> {
    return this.http.get<Product>('http://localhost:8080/restControllerProduct/listProduct');
  }


}
