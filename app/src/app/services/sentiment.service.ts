// src/app/services/sentiment.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SentimentService {
  private apiUrl = 'http://localhost:8000/api/documents/';

  constructor(private http: HttpClient) {}

  analyzeSentiment(content: string): Observable<any> {
    return this.http.post(this.apiUrl, { content });
  }
}
