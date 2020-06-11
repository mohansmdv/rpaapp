import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Membermodel } from '../model/membermodel';

@Injectable({
  providedIn: 'root'
})
export class MemeberService {

  constructor(private http: HttpClient) { }
  public API = 'https://localhost:44390/api/';
  public SUGARLEVELS_API = `${this.API}/Student`;

    getAll(): Observable<Array<Membermodel>> {
      return this.http.get<Array<Membermodel>>(this.SUGARLEVELS_API);
    }
}
