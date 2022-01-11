declare var angular: angular.IAngularStatic;
import { downgradeInjectable } from '@angular/upgrade/static';


import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

export interface PhoneData {
  name: string;
  snippet: string;
  images: string[];
}

  @Injectable()
  export class Phone {
 constructor(private http: HttpClient){}

 query(): Observable<PhoneData[]> {
  return this.http.get<PhoneData[]>(`phones/phones.json`);
 }
 get(id: string): Observable<PhoneData> {
  return this.http.get<PhoneData>(`phones/${id}.json`);
}
  }

  angular.module('core.phone')
  .factory('phone', downgradeInjectable(Phone));