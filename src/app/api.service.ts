import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = "http://localhost:3000/data"

  public search = new Subject<any>
  constructor(private http: HttpClient) {

  }
  savedata(datas: any): Observable<any> {
    return this.http.post(this.url, datas);
  }
  getdata(): Observable<any> {
    return this.http.get(this.url);

  }

  getSearchString(searchString: any) {
    this.search.next(searchString)
  }
}
