import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BasketService } from 'src/app/basket/basket.service';
import { Basket } from 'src/app/shared/Models/basket';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  basket$ :Observable<Basket | null> | undefined;
  constructor(private basketService:BasketService) { }

  ngOnInit(): void {
    this.basket$ = this.basketService.basketSource$;
  }

}
