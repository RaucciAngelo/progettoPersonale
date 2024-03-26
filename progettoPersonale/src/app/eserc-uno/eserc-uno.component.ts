import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eserc-uno',
  templateUrl: './eserc-uno.component.html',
  styleUrls: ['./eserc-uno.component.css']
})
export class EsercUnoComponent implements OnInit {

  cocco: string = "";

  numeri: number[] = [10];

  pippo: string = "pippo";

  on: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.cocco = "cocco bello";
    console.log(this.cocco);
  }

  coccoBello(cocco: string) {
    this.cocco = "Non piu' cocco bello";
    console.log(this.cocco);
  }

  aggiunta(numeri: number[]) {
    //Con questo codice quello che andiamo a fare è fissare prima di tutto di non andare oltre i 100.
    //Fissiamo poi un numero iniziale che sarà uguale alla lunghezza dell'array + 10 (lunghezza = 1 perchè è un elemento)
    if (this.numeri.length < 100) {
      const numeroIniziale = this.numeri.length + 10;
      if (numeroIniziale < 100) { //Qui fissiamo fino a quando deve girare il tutto
        this.numeri.push(numeroIniziale); //Inseriamo il numero ciclato
        console.log(this.numeri);
      }
    }
  }

  invertiParola(pippo: string) {
    console.log(this.pippo);
    this.pippo = pippo.split("").reverse().join("");
    console.log("reverse", this.pippo);
  }

  interruttore(on:boolean){
    this.on = !this.on;
  }

}
