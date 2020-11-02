import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }

}

  //teste do checkbox com ngclass
  // testCheck1:boolean;
  // testCheck2:boolean;
  // testCheck3:boolean;
  // check() {
  //   return {'border': this.testCheck1, 'color': this.testCheck2, 'background-color': this.testCheck3}
  // }

  //teste input e output
  // @Input("teste2") public test :string = "";
  // @Output() surname = new EventEmitter<string>();
  // testeFunc(): void {
  //   this.surname.emit(this.test)
  // }