import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  constructor(private http: HttpClient) { } //HttpClient per eseguire chiamate Http

  result: Subject<any> = new Subject<any>();

  //Togliendo ":Observable<any>" non cambia niente, di base è già un observable
  fetchData(): Observable<any> { //Any -> dati di tipo any 
    return this.http.get<any>('https://jsonplaceholder.typicode.com/posts');
  }

  updateData(): Observable<any> {
    const url = './assets/test.json'; //In questo caso prendiamo un valore mockato, ma potremmo passargli anche quell'url.
    // Effettua una richiesta HTTP GET all'URL specificato e ottiene la risposta come un Observable di tipo 'any'
    return this.http.get<any>(url).pipe(
      // Utilizza il metodo 'tap' per eseguire un'azione collaterale ogni volta che un valore viene emesso dall'Observable //
      tap(value => {
        // Questo blocco di codice viene eseguito ogni volta che viene emesso un nuovo valore dall'Observable
        // 'value' rappresenta il valore emesso
        // Il valore emesso viene aggiunto come nuovo valore all'interno di un oggetto 'result' di tipo Subject o BehaviorSubject
        this.result.next(value)
      })
    );
  }
}
