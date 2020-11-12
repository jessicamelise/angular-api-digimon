import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Teste } from '../models/teste';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TesteService {

  url = "http://localhost:3000/tasks";

  constructor(private httpClient: HttpClient) { }

  getTeste(): Observable<Teste[]> {
    return this.httpClient.get<Teste[]>(this.url)
    .pipe(
      map(data => data)
    )
  }
}