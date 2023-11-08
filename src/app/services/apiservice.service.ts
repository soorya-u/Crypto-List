import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiserviceService {
  constructor(private http: HttpClient) {}

  getUsdPrices() {
    return this.http.get(
      'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Clitecoin%2Cethereum%2Cdogecoin&vs_currencies=usd'
    );
  }

  getInrPrices() {
    return this.http.get(
      'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Clitecoin%2Cethereum%2Cdogecoin&vs_currencies=inr'
    );
  }
}
