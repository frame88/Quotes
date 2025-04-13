import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  constructor(private http: HttpClient) {}

  getQuotes(): Observable<any> {
    return this.http.get('https://api.quotable.io/quotes/random?limit=10');
  }
}
