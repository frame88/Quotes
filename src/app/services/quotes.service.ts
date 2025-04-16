import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../environment';
import { quote } from '../models/quote'; 


@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getQuotes(): Observable<quote[]> {
    return this.http.get<quote[]>(this.apiUrl);
  }
}
