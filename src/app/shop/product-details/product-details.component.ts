import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/Models/product';
import { ShopService } from '../shop.service';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';
import { BasketService } from 'src/app/basket/basket.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  @Input() product?: Product;
  quantity = 1;
  constructor(private shopService:ShopService, private activeRoute:ActivatedRoute,
    private bcService:BreadcrumbService, private basketService:BasketService) {
      this.bcService.set('@productDetails', ' ')
     }

  ngOnInit(): void {
    this.loadProduct();
  }

  addItemToBasket(){
    this.basketService.addItemToBasket(this.product!,this.quantity);
  }

  incrementQuantity(){
    this.quantity++;
  }

  decrementQuantity(){
    if(this.quantity > 1){
      this.quantity--;
    }
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
