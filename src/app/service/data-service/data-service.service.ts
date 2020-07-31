import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  data: any[] = [];

  constructor(private _http: HttpClient ) { 
    this.getDataJson().subscribe(response => this.data = response)
  }


  getDataJson(): Observable<any>{
    return this._http.get("/assets/data/data.json");
  }
}

