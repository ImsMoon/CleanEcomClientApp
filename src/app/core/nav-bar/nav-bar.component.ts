import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from 'src/app/account/account.service';
import { BasketService } from 'src/app/basket/basket.service';
import { Basket, BasketItem } from 'src/app/shared/Models/basket';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  basket$ :Observable<Basket | null> | undefined;
  constructor(public basketService:BasketService, public accountService:AccountService) { }

  ngOnInit(): void {
  }

  getCount(items:BasketItem[]){
    return items.reduce((sum,item) => sum + item.quantity,0);
  }

}
