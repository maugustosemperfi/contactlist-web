import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environment/environment';

@Injectable()
export class ContactService {

  private ENDPOINT;

  constructor(private http: HttpClient) {
    this.ENDPOINT = `${environment.endpoint}contacts/`;
  }

  getAll() {
    return this.http.get(this.ENDPOINT);
  }
}
