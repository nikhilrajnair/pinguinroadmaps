import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {


  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
    });
  }

  public getJSON(): Observable<any> {
    return this.http.get("./assets/Frontend_project_sample_data.json");
  }
}
