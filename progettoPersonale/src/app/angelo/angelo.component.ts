import { Component, OnInit } from '@angular/core';
import { ObservableService } from '../service/observable.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-angelo',
  templateUrl: './angelo.component.html',
  styleUrls: ['./angelo.component.css']
})
export class AngeloComponent implements OnInit {

  data: Observable<any> = new Observable<any>();

  data2: Observable<any> = new Observable<any>();

  constructor(public observableService: ObservableService) { }

  ngOnInit(): void {
    this.data = this.observableService.fetchData();
    this.data.subscribe(
      data => {
        console.log(data); //Visualizza i dati ricevuti dalla chiamata
      }
    )

    /* => significa prendi i dati di questo e facci X cose */
    this.observableService.updateData().subscribe(
      data2 => {
        console.log(data2);
        this.data2 = data2;
      }
    )
  }

}
