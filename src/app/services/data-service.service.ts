import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) { }

  // Property to store the response data from the API
  public responseData: any = null

  // Function to fetch data from the API using HttpClient
  fetchData(): Observable<any> {
    return this.http.get('https://1.api.fy23ey06.careers.ifelsecloud.com/');
  }

}
