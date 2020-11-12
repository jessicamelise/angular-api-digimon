import { Component, OnInit } from '@angular/core';
import { Teste } from '../models/teste';
import { TesteService } from '../services/teste.service';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent implements OnInit {

  teste: Teste[] = [];

  constructor(private testeService: TesteService) {}

  ngOnInit() {
    this.getTeste()
  }


  getTeste() {
    this.testeService.getTeste()
      .subscribe((item) => {
        this.teste = item;
      });
  }


}
