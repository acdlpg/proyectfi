import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RutaService {
  sharedData: string = '';

  setSharedData(data: string) {
    this.sharedData = data;
  }

  getSharedData() {
    return this.sharedData;
  }

  constructor(public httpClient: HttpClient) {}

  getJSONurl(url: string) {
    return this.httpClient.get(url);
  }
}
