import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Digimon } from '../models/digimon';

@Injectable({
  providedIn: 'root'
})
export class DigimonService {

  url = "https://digimon-api.vercel.app/api/digimon";

  constructor(private httpClient: HttpClient) { }

  getDigimons() {
    return this.httpClient.get<Digimon[]>(this.url).toPromise();
  }
}
