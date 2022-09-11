import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Product from 'src/models/product.model';
import { Router } from "@angular/router";
import { ContextService } from './../../../services/context.service';
// import { HighlightDirective } from "../../../directives/highlight.directive";

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Output() ondelete: EventEmitter<any> = new EventEmitter<any>();
  @Input() product!: Product;
  constructor(private router: Router, private context: ContextService) {
  }

  ngOnInit(): void {
  }

  goToDetails(id: number) {
    this.router.navigateByUrl("details/" + id);
  }

  buy(id: number) {
    this.context.delete(id).subscribe(data => {
      this.ondelete.emit(this.product.id);
      this.router.navigateByUrl('')
    })
  }

}
