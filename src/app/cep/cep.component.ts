import { SharedService } from './../shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.css']
})
export class CepComponent implements OnInit {
    cep: string = "";
    logradouro: string = ""
    bairro: string = "";
    localidade: string = "";
    uf: string = "";

//Injeção de dependência do service
  constructor(private _sharedService: SharedService) {
   }

  ngOnInit() {
  }

      callCepService(){
        this._sharedService.getAddressByCep(this.cep).subscribe(
          lstresult => {
            this.cep = lstresult["cep"];
            this.logradouro = lstresult["logradouro"];
            this.bairro = lstresult["bairro"];
            this.localidade = lstresult["localidade"];
            this.uf = lstresult["uf"];
          },
          error => {
        console.log("Error. The getAddressByCep result JSON value is as follows:");
        console.log(error);
          }
        );

      
    }

}
