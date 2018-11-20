import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class MakeHttp {
  constructor(private http: Http) {}

  storeTransaction(transaction: any[]) {
    return this.http.post('http://127.0.0.1:8000/api/transactions/1', transaction);
  }
}
