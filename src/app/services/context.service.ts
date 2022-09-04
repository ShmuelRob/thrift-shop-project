import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import Product from 'src/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ContextService {

  url = "http://localhost:4100/items";
  constructor(private client: HttpClient) {

  }

  get() {
    return this.client.get(this.url);
  }

  getById(id: number) {
    return this.client.get(`${this.url}/${id}`);
  }

  post(product: Product) {
    return this.client.post(this.url, product);
  }

  put(product: Product) {
    return this.client.put(`${this.url}/${product.id}`, product);
  }

  delete(id: number) {
    return this.client.delete(`${this.url}/${id}`);
  }
}
