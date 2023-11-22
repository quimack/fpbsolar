import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class FormService {
  private url = "http://localhost:3000/sendEmail.php";

  constructor(private http: HttpClient) {}

  sendEmail(data: any): Observable<any> {
    return this.http.post(`${this.url}`, JSON.stringify(data));
  }
}
