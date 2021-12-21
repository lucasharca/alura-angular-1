import { Component, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { Transferencia } from "../services/models/transferencia.model";
import { TransferenciaService } from "../services/transferencia.service";

@Component({
    selector:'app-nova-transferencia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent{

    @Output() aoTransferir = new EventEmitter<any>()

    valor: number;
    destino: number;

    constructor(private service: TransferenciaService, private router: Router) {

    }


    transferir(){
        const valueToEmit: Transferencia = {valor: this.valor, destino: this.destino}

        this.service.adicionar(valueToEmit).subscribe(resultado => {
          console.log(resultado);
          this.router.navigateByUrl('extrato')

        },
        (error) => console.log(error)
        );
    }

    limparCampos() {
      this.valor = 0;
      this.destino = 0;
    }
}
