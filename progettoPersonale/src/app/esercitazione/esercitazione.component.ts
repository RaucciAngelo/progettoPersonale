import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-esercitazione',
  templateUrl: './esercitazione.component.html',
  styleUrls: ['./esercitazione.component.css']
})
export class EsercitazioneComponent implements OnInit {

  x: string = "Ciao";

  numero:number[] = [1,2,3,4,5,6];

  constructor() {
   //x = this.x;
    //numero = this.numero;
  }

  ngOnInit(): void {
    
  }

}
