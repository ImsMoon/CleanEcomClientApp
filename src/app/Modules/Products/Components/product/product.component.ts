import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pagination } from '../../Shared/Models/pagination';
import { Product } from '../../Shared/Models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: Product[] = [];
  facts: any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    // this.http.get<Pagination<Product[]>>('https://api.publicapis.org/entries').subscribe({
    //   next: response => this.products = response.data, // what to do next
    //   error: error => console.log(error), // what to do if there is an error
    //   complete: () => {
    //     console.log('request completed');
    //     console.log('extra statment');
    //   }
    // })

    this.http.get<any>('https://api.publicapis.org/entries')
    .subscribe({
      next: response => this.facts = response.entries,
      error: error => console.log(error), // what to do if there is an error
      complete: () => {
        console.log('request completed');
        console.log('extra statment');
      }
    })
  }

}
