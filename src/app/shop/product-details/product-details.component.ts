import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/Models/product';
import { ShopService } from '../shop.service';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';
import { BindingScope } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  @Input() product?: Product;
  constructor(private shopService:ShopService, private activeRoute:ActivatedRoute,
    private bcService:BreadcrumbService) {
      this.bcService.set('@productDetails', ' ')
     }

  ngOnInit(): void {
    this.loadProduct();
  }


  loadProduct() {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    if (id) 
    this.shopService.getProduct(+id).subscribe(
      product => {
      this.product = product;
      this.bcService.set('@productDetails',product.name);
      },
       error => {console.log(error);}
    );
  }
}
