import {Component, OnInit} from '@angular/core';
import {IProduct} from './product';
import{ActivatedRoute, Router} from '@angular/router';
@Component({
  moduleId: module.id,
  templateUrl: 'product-detail.component.html'
})

export class ProductDetailComponent {
  constructor(private _route: ActivatedRoute, private _router: Router){}
  pageTitle : string = 'Details';
  product: IProduct;

  ngOnInit(): void {
    let id = this._route.snapshot.params['id'];
    this.pageTitle += `: ${id}`;
  }

  onBack():void{
    this._router.navigate(['/products']);
  }
}
