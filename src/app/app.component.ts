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
    { id: 0, nazwa: 'SRB, OSAT, PEF, GIS', opiekun: 'Kuba Plachta' },
    { id: 1, nazwa: 'PIU-EMP@TIA', opiekun: 'Kuba Karmański' },
    { id: 2, nazwa: 'CSIZS, ZDM', opiekun: 'Przemek Kubisa' },
    { id: 3, nazwa: 'CLUIID, ALK(ePromotor)', opiekun: 'Zbyszek Szot' },
    { id: 4, nazwa: 'WORTAL PSZ', opiekun: 'Rafał Grzelec' },
    { id: 5, nazwa: 'KDR, EESSI', opiekun: 'Staszek Sobas' },
    { id: 6, nazwa: 'RZ', opiekun: 'Kasia Frank' },
    { id: 7, nazwa: 'CITY OF REYKJAVIK, BROKER SI PSZ', opiekun: 'Michał Tęcza' },
    { id: 8, nazwa: 'SOF', opiekun: 'Angelika Świacka' }
  ]

  uzyte: number[] = [];
  index: number = 0;

  ngOnInit(): void {
    this.wartosc = new Projekt(0, 'NA DRESZCZYK EMOCJI', 'PRZYGOTUJCIE SIĘ');
  }

  losujWartosci() {
    for (let index = 0; index < this.PROJEKTY.length; index++) {
      let number = Math.floor(Math.random() * this.PROJEKTY.length);
      while (this.uzyte.includes(number)) {
        number = Math.floor(Math.random() * this.PROJEKTY.length);
      }
      this.uzyte.push(number);
    }
    this.PROJEKTY.push(new Projekt(this.PROJEKTY.length-1, 'WSZYSTKO OMÓWIONE', 'ZAPRASZAMY ZA TYDZIEŃ'));
    this.uzyte.push(this.PROJEKTY.length-1);
  }

  prevValue() {
    if(this.index === 0){
      return;
    }
    this.index--;
    this.wartosc = this.PROJEKTY[this.uzyte[this.index]];
  }

  nextValue() {
    if (this.uzyte.length == 0) {
      this.losujWartosci();
      this.wartosc = this.PROJEKTY[this.uzyte[this.index]];
    }
    else if(this.index === this.uzyte.length-1){
      this.wartosc = this.PROJEKTY[this.uzyte[this.index]];
      return;
    }
    else{
      this.index++;
      this.wartosc = this.PROJEKTY[this.uzyte[this.index]];
    }
  }

  reset() {
    this.uzyte = [];
    this.wartosc = new Projekt(0, '', '');
    this.index = 0;
  }


}
