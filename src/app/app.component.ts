import { Component, OnInit } from '@angular/core';


export class Projekt {
  constructor(id: number, nazwa: string, opiekun: string, media: string|null) {
    this.id = id;
    this.nazwa = nazwa;
    this.opiekun = opiekun;
    this.media = media;
  }

  public id: number;
  public nazwa: string;
  public opiekun: string;
  public media: string|null;

}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'mieszacz';

  wartoscWyswietlana!: Projekt;

  PROJEKTY: Projekt[] = [
    { id: 0, nazwa: 'SRB, OSAT, PEF, GIS', opiekun: 'Kuba Plachta', media: null },
    { id: 1, nazwa: 'PIU-EMP@TIA', opiekun: 'Kuba Karmański', media: null },
    { id: 2, nazwa: 'CSIZS, ZDM', opiekun: 'Przemek Kubisa', media: null },
    { id: 3, nazwa: 'CLUIID, ALK(ePromotor)', opiekun: 'Zbyszek Szot', media: null },
    { id: 4, nazwa: 'WORTAL PSZ', opiekun: 'Rafał Grzelec', media: null },
    { id: 5, nazwa: 'KDR, EESSI', opiekun: 'Staszek Sobas', media: null },
    { id: 6, nazwa: 'RZ', opiekun: 'Kasia Frank', media: null },
    { id: 7, nazwa: 'CITY OF REYKJAVIK, BROKER SI PSZ', opiekun: 'Michał Tęcza', media: null },
    { id: 8, nazwa: 'SOF', opiekun: 'Angelika Świacka', media: null }
  ]

  uzyte: number[] = [];
  index: number = 0;

  ngOnInit(): void {
    this.wartoscWyswietlana = new Projekt(0, 'NA DRESZCZYK EMOCJI', 'PRZYGOTUJCIE SIĘ', 'https://i.imgflip.com/7fm23n.jpg');
  }

  losujWartosci() {
    for (let index = 0; index < this.PROJEKTY.length; index++) {
      let number = Math.floor(Math.random() * this.PROJEKTY.length);
      while (this.uzyte.includes(number)) {
        number = Math.floor(Math.random() * this.PROJEKTY.length);
      }
      this.uzyte.push(number);
    }
    this.PROJEKTY.push(new Projekt(this.PROJEKTY.length-1, 'WSZYSTKO OMÓWIONE', 'ZAPRASZAMY ZA TYDZIEŃ', 'https://i.pinimg.com/originals/b9/0a/79/b90a79b4c361d079144597d0bcdd61de.jpg'));
    this.uzyte.push(this.PROJEKTY.length-1);
  }

  prevValue() {
    if(this.index === 0){
      return;
    }
    this.index--;
    this.wartoscWyswietlana = this.PROJEKTY[this.uzyte[this.index]];
  }

  nextValue() {
    if (this.uzyte.length == 0) {
      this.losujWartosci();
      this.wartoscWyswietlana = this.PROJEKTY[this.uzyte[this.index]];
    }
    else if(this.index === this.uzyte.length-1){
      this.wartoscWyswietlana = this.PROJEKTY[this.uzyte[this.index]];
      return;
    }
    else{
      this.index++;
      this.wartoscWyswietlana = this.PROJEKTY[this.uzyte[this.index]];
    }
  }

  reset() {
    this.uzyte = [];
    this.wartoscWyswietlana = new Projekt(0, '', '', null);
    this.index = 0;
  }


}
