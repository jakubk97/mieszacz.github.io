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
    { id: 0, nazwa: 'PEF, GIS', opiekun: 'Kuba Plachta', media: null },
    { id: 1, nazwa: 'PIU-EMP@TIA, RZ', opiekun: 'Kuba Karmański', media: null },
    { id: 2, nazwa: 'CSIZS', opiekun: 'Przemek Kubisa', media: null },
    { id: 3, nazwa: 'WORTAL PSZ', opiekun: 'Rafał Grzelec', media: null },
    { id: 4, nazwa: 'KDR', opiekun: 'Staszek Sobas', media: null },
    { id: 5, nazwa: 'BROKER', opiekun: 'Przemek Chlebek', media: null },
    { id: 6, nazwa: 'SOF', opiekun: 'Angelika Świacka', media: null },
    { id: 7, nazwa: 'ZDM', opiekun: 'Michał Pocheć', media: null },
    { id: 8, nazwa: 'UMK, SIO', opiekun: 'Piotr Adamczyk', media: null },
    { id: 9, nazwa: 'NFZ CRM', opiekun: 'Sebastian Nawrocki', media: null },
    { id: 10, nazwa: 'PFRON', opiekun: 'Konrad Balbuza', media: null }
  ]

  uzyte: number[] = [];
  index: number = 0;

  ngOnInit(): void {
    this.wartoscWyswietlana = new Projekt(0, 'NA DRESZCZYK EMOCJI', 'PRZYGOTUJCIE SIĘ', null);
  }

  losujWartosci() {
    for (let index = 0; index < this.PROJEKTY.length; index++) {
      let number = Math.floor(Math.random() * this.PROJEKTY.length);
      while (this.uzyte.includes(number)) {
        number = Math.floor(Math.random() * this.PROJEKTY.length);
      }
      this.uzyte.push(number);
    }
    this.PROJEKTY.push(new Projekt(this.PROJEKTY.length-1, 'WSZYSTKO OMÓWIONE', 'ZAPRASZAMY ZA TYDZIEŃ', null));
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
