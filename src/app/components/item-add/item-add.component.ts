import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { imageValidate } from 'src/app/validators/image.validator';
import { ValidateUrl } from 'src/app/validators/url.validator';
import Product from './../../../models/product.model';
import { ContextService } from './../../services/context.service';

@Component({
  selector: 'item-add',
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.css']
})
export class ItemAddComponent implements OnInit {

  product: Product;

  newItemForm: FormGroup = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(1)]),
    description: new FormControl("", [Validators.required, Validators.minLength(5)]),
    imageSource: new FormControl("", [ValidateUrl, imageValidate]),
    price: new FormControl("", [Validators.required, Validators.min(0)]),
    city: new FormControl("", [Validators.required, Validators.minLength(1)]),
    phoneNumber: new FormControl("", [Validators.required, Validators.pattern('[0-9]{8,13}')]),
    publishDate: new FormControl("", [Validators.required])
  });

  constructor(private context: ContextService, private router: Router) {
    this.product = new Product(0, "", "", "", 0, "", { number: 0, areaCode: 0 }, new Date());
  }
  ngOnInit(): void {
  }
  saveForm() {
    let name = this.newItemForm.controls["name"].value;
    let description = this.newItemForm.controls["description"].value;
    let imageSource = this.newItemForm.controls["imageSource"].value;
    let price = this.newItemForm.controls["price"].value;
    let city = this.newItemForm.controls["city"].value;
    let phoneNumber = this.newItemForm.controls["phoneNumber"].value;
    let date = this.newItemForm.controls["publishDate"].value

    let phone = {
      number: Number.parseInt(phoneNumber.toString().slice(2)),
      areaCode: Number.parseInt(phoneNumber.toString().slice(0,2))
    }

    this.product = new Product(0, name, description, imageSource, price, city, phone, date);

    if (this.newItemForm.valid) {
      this.addNewItem();
    }
  }

  addNewItem() {
    this.context.post(this.product)
      .subscribe(data => {
        this.router.navigateByUrl("");
      })
  }

}
