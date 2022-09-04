import { Component, OnInit } from '@angular/core';
import Product from 'src/models/product.model';
import { ContextService } from "./../../services/context.service";

@Component({
  selector: 'item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  productList: Product[];
  sortByDateAsc = true;
  sortByPriceAsc = true;

  constructor(private context: ContextService) {
    this.productList = [];
  }

  ngOnInit(): void {
    this.context.get().subscribe(res => this.productList = res as Product[]);
  }


  onItemDeleteHandler(id: any) {
    this.productList = this.productList.filter(p => p.id != id);
  }


  sortByPrice() {
    if(this.sortByPriceAsc === true){
      this.productList.sort((a, b) => a.price - b.price);
      this.sortByPriceAsc = false;
      this.sortByDateAsc = true;
    }
    else{
      this.productList.sort((a, b) => b.price - a.price);
      this.sortByPriceAsc = true;
      this.sortByDateAsc = true;
    }
  }

  sortByDate() {
    if(this.sortByDateAsc === true){
      this.productList.sort((a, b) => <any>new Date(a.datePublished) - <any>new Date(b.datePublished));
      this.sortByDateAsc = false;
      this.sortByPriceAsc = true;
    }
    else{
      this.productList.sort((a, b) => <any>new Date(b.datePublished) - <any>new Date(a.datePublished));
      this.sortByDateAsc = true;
      this.sortByPriceAsc = true;
    }
  }

}
