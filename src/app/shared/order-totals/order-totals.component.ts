import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BasketTotal } from '../Models/basket';
import { BasketService } from 'src/app/basket/basket.service';

@Component({
  selector: 'app-order-totals',
  templateUrl: './order-totals.component.html',
  styleUrls: ['./order-totals.component.scss']
})
export class OrderTotalsComponent implements OnInit {
  basketTotal$:Observable<BasketTotal | null> | undefined;

  constructor(private basketService:BasketService) { }

  ngOnInit(): void {
    this.basketTotal$ = this.basketService.basketTotalSource$;
  }

}
