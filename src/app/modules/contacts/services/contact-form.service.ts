import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@environment/environment';
import { Contact } from '@shared/models/contact.model';

@Injectable()
export class ContactFormService {
  private ENDPOINT;

  constructor(private httpClient: HttpClient) {
    this.ENDPOINT = `${environment.endpoint}contacts/`;
  }

  addContact(contact: Contact) {
    const url = `${this.ENDPOINT}create`;
    const headers: HttpHeaders = new HttpHeaders();
    headers.set('Access-Control-Allow-Origin', '*');
    headers.set('Access-Control-Allow-Headers', 'Content-type');
    headers.set('Access-Control-Allow-Methods', 'POST');
    return this.httpClient.post(url, contact, {headers: headers});
  }
}
