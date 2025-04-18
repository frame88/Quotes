import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root'
})
export class GptService {

  private readonly endpoint = 'https://api.openai.com/v1/chat/completions';

  constructor(private http: HttpClient) {}

  askGpt(prompt: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${environment.openaiApiKey}`
    });

    const body = {
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'Sei un generatore di citazioni brevi, ispirazionali e originali.' },
        { role: 'user', content: 'Dammi una citazione sempre diversa dalla prima, ed inserisci l\'autore con un trattino che precede il nome' }
      ],
      temperature: 0.8,
      max_tokens: 100
    };

    return this.http.post(this.endpoint, body, { headers });
  }
}
