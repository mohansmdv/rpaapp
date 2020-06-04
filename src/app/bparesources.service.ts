import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import {BPAResources} from './rpa-bparesources'
import {BPAResourcedata} from './mock-bparesources'

@Injectable({
  providedIn: 'root'
})
export class BparesourcesService {

  constructor() { }

  getResourceinfo(): Observable<BPAResources[]> {
    return of(BPAResourcedata);
  }
}
