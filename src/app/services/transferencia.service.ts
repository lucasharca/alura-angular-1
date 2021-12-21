import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transferencia } from '../services/models/transferencia.model'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private listaTransferencia: any[];
  private url = 'http://localhost:3000/transferencias'

  constructor(private httpClient: HttpClient) {
    this.listaTransferencia = [];
  }

  get transferencias() {
    return this.listaTransferencia
  }

  private hidratar(transferencia: any){
    transferencia.data = new Date()
    return transferencia;
  }

  todas(): Observable<Transferencia[]> {
    return this.httpClient.get<Transferencia[]>(this.url)
  }

  adicionar( transferencia: any): Observable<Transferencia> {
    const hidratado = this.hidratar(transferencia)
    return this.httpClient.post<Transferencia>(this.url, hidratado);
  }
}
