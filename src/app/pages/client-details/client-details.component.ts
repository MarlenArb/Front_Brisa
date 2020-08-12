import { Component, OnInit } from '@angular/core';
import { ClientDetailsService } from 'src/app/service/client-details/client-details.service';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {

  clientDetails: any[];
  clientDetailsService: any[];
  clientDetailsOCCs: any[];
  clientDetailsPromotion: any[];

  constructor(private _clientDetails: ClientDetailsService) { }

  ngOnInit(): void {
    this._clientDetails.getClientDetails().subscribe(
      response => {
        this.clientDetails = response
        console.log(response + " Servicio de detalles de cliente")
      }
    )
  }

  getClientDetails() {
    this._clientDetails.getClientDetailsByClient("service").subscribe(
      response => this.clientDetailsService = response
    )
    this._clientDetails.getClientDetailsByClient("occs").subscribe(
      response => this.clientDetailsOCCs = response
    )
    this._clientDetails.getClientDetailsByClient("promotion").subscribe(
      response => this.clientDetailsPromotion = response
    )
  }

}
