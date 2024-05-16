import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contatto',
  templateUrl: './contatto.component.html',
  styleUrls: ['./contatto.component.css']
})
export class ContattoComponent implements OnInit {

  constructor() { }

  indirizziOn: boolean = false;

  toggleIndirizzi(){
    this.indirizziOn = !this.indirizziOn;
  }

  ngOnInit(): void {
  }

}
