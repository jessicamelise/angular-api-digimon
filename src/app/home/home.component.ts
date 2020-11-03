import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Digimon } from '../models/digimon';
import { DigimonService } from '../services/digimon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  digimons: Digimon[];

  constructor(private digimonService: DigimonService) {}

  ngOnInit() {
    this.getDigimons();
  }

  getDigimons() {
    this.digimonService.getDigimons().then((digimons) => {
      this.digimons = digimons;
    });
  }

  // arDigimon: Array<Digimon>;

  // constructor(private httpClient: HttpClient) { }

  // ngOnInit(): void {
  //   this.getDigimon();
  // }

  // async getDigimon(): Promise<void> {
  //   this.arDigimon = await this.httpClient.get<Digimon[]>("https://digimon-api.vercel.app/api/digimon").toPromise();
  // }

}
