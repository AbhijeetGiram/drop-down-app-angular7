import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  public baseUrl = "http://localhost:3000/api/v1";

  constructor(private _http: HttpClient) { }


  public getOptions(): Observable<any> {

    return this._http.get(`${this.baseUrl}/dropDown/getOptions`);

  }//end getOptions

  public updateOptions(data): Observable<any> {
    let sample= JSON.stringify(data);
    const params = new HttpParams()
      .set('options', sample)

    return this._http.post(`${this.baseUrl}/dropDown/updateOptions`,params);

  }//end updateOptions

}
