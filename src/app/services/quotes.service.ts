import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../environment';

interface Quote {
  q: string; // testo
  a: string; // autore
  c: string; // numero caratteri
  h: string; // versione HTML
}

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getQuotes(): Observable<Quote[]> {
    return this.http.get<Quote[]>(this.apiUrl);
  }
}
