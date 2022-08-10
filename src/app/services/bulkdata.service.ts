import { Injectable} from '@angular/core';
import{ HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { appConstant } from '../app.constant';
import { environment } from '../environments/environment';
import { Product } from '../products/product';

@Injectable ({
  providedIn :'root'
})  
export class Bulkdataservice {
  apiLink = `${environment.url}${appConstant.apiRoute.products}`;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiLink); 
   
  }
 
}