import { Component } from '@angular/core';
import { ApiserviceService } from 'src/app/services/apiservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
  
export class HomeComponent {

  usdprices:any;
  inrprices:any;

  constructor(private api:ApiserviceService){
    this.api.getUsdPrices().subscribe(res=>{
      this.usdprices=res;
    });
    this.api.getInrPrices().subscribe(res=>{
      this.inrprices=res;
    }); 
  }
}
