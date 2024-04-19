import { Injectable } from '@angular/core';
import {enviroment} from "../../../enviroments/enviroment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BeanService{
  baseUrl: string = enviroment.baseUrl;
  constructor(private http: HttpClient) { }

  getBeans() {
    return this.http.get<any>(`${this.baseUrl}/api/Beans`)
  }
}
