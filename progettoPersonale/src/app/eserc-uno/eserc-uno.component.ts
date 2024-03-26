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
    this.numeri.push(10);
    console.log(this.numeri);
    numeri.push(20);
    console.log("Numeri ora ->", numeri);
    numeri.reverse();
    console.log("Numeri ora reverted ->", numeri);
  }

  invertiParola(pippo: string) {
    console.log(this.pippo);
    this.pippo = pippo.split("").reverse().join("");
    console.log("reverse", this.pippo);    
  }

}
