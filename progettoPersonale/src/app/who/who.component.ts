import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-who',
  templateUrl: './who.component.html',
  styleUrls: ['./who.component.css']
})
export class WhoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  github(){
    let link:String = "https://github.com/RaucciAngelo?tab=repositories";
    //link = "https://github.com/RaucciAngelo?tab=repositories";
    
  }

}
