import { trigger, transition, style, animate, query } from '@angular/animations';   
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eserc-due',
  templateUrl: './eserc-due.component.html',
  styleUrls: ['./eserc-due.component.css']
})
export class EsercDueComponent implements OnInit {

  show: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  animation = [   
    trigger('dissolvenza', [  
        transition(':enter', [  
          style({ opacity: 0 }), animate('400ms', style({ opacity: 1 }))  
        ]),  
        transition(':leave', [  
          style({ opacity: 1 }), animate('400ms', style({ opacity: 0 }))  
        ])]  
    )  
    // Altre eventuali animazioni   
]  

}
