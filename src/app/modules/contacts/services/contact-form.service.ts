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
    return this.httpClient.post(url, contact);
  }

  loadContact(id: number) {
    const url = `${this.ENDPOINT}${id}`;
    return this.httpClient.get(url);
  }

  updateContact(id: number, contact: Contact) {
    const url = `${this.ENDPOINT}${id}/update`;
    return this.httpClient.post(url, contact);
  }
}
