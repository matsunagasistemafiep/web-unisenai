import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private dadosSubject: Subject<string> = new Subject<string>();

  constructor() { }

  enviarDados(dados: string) {
    this.dadosSubject.next(dados); // Envia dados para todos os inscritos no subject
  }

  obterDados(): Observable<string> {
    return this.dadosSubject.asObservable(); // Retorna um Observable, que os componentes se inscrevem
  }

}
