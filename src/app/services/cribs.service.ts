//Service allows us to re use this logic -- Take all cribs

import { Injectable } from '@angular/core';
import { HttpClient } from'@angular/common/http';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CribsService {

  public newCribSubject = new Subject<any>();

  constructor(private http : HttpClient) { }

  getAllCribs() {
    return this.http.get('http://localhost:4200/assets/data/cribs.json');

  }

  addCrib(data) {
    data.image = 'crib';
    this.newCribSubject.next(data);
  }
}
