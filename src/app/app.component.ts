import { Component, OnInit } from '@angular/core';


export class Projekt {
  constructor(id: number, nazwa: string, opiekun: string) {
    this.id = id;
    this.nazwa = nazwa;
    this.opiekun = opiekun;
  }

  public id: number;
  public nazwa: string;
  public opiekun: string;

}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'mieszacz';

  wartosc: any;

  PROJEKTY: Projekt[] = [
    { id: 0, nazwa: 'SRB, OSAT, PEF, UZP', opiekun: 'Kuba Plachta' },
    { id: 1, nazwa: 'PIU-EMP@TIA', opiekun: 'Kuba Karmański' },
    { id: 2, nazwa: 'CSIZS, ZDM, UMK', opiekun: 'Przemek Kubisa' },
    { id: 3, nazwa: 'CLUIID, EPIBAZA', opiekun: 'Zbyszek Szot' },
    { id: 4, nazwa: 'WORTAL PSZ', opiekun: 'Rafał Grzelec' },
    { id: 5, nazwa: 'KDR', opiekun: 'Staszek Sobas' },
    { id: 6, nazwa: 'RZ', opiekun: 'Kasia Sobas' },
    { id: 5, nazwa: 'CITY OF REYKJAVIK, BROKER SI PSZ', opiekun: 'Michał Tęcza' }
  ]

  uzyte: number[] = [];

  ngOnInit(): void {
    this.wartosc = new Projekt(0, '', '');
  }

  losujWartosc() {
    let number = Math.floor(Math.random() * this.PROJEKTY.length);
    if (this.uzyte.length == this.PROJEKTY.length) {
      this.wartosc = new Projekt(0, 'WSZYSTKO OMÓWIONE', 'ZAPRASZAMY ZA TYDZIEŃ');
      return;
    }
    while (this.uzyte.includes(number)) {
      number = Math.floor(Math.random() * this.PROJEKTY.length);
    }

    this.wartosc = this.PROJEKTY[number];
    this.uzyte.push(number);
    
  }

  reset() {
    this.uzyte = [];
    this.wartosc = new Projekt(0, '', '');
  }


}
