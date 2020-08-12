import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientDetailsService {
  data: any[] = [];

  constructor(private _http: HttpClient) { }

  getClientDetails(): Observable<any> {
    return this._http.get("/assets/data/client-details.json").pipe(catchError(error => throwError(error)));
  }

  getClientDetailsByClient(type: string): Observable<any> {
    switch (type) {
      case "service":
        return this._http.get("/assets/data/client-details-services.json");
      case "occs":
        return this._http.get("/assets/data/client-details-occs.json");
      case "promotion":
        return this._http.get("/assets/data/client-details-promotions.json");
      default:
        break;
    }
  }
}
