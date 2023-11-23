import { Injectable } from '@angular/core';
import { Pagination } from '../shared/Models/pagination';
import { Product } from '../shared/Models/product';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Brand } from '../shared/Models/brand';
import { Type } from '../shared/Models/type';
import { ShopParams } from '../shared/Models/shop-params';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = environment.apiUrl;
  constructor(private http:HttpClient) { }

  getProducts(shopParams:ShopParams):Observable<Pagination<Product[]>>{
    let params = new HttpParams();

    params = params.append('brandId', shopParams.brandId);
    params = params.append('typeId', shopParams.typeId);
    params = params.append('sort', shopParams.sort);
    params = params.append('pageIndex', shopParams.pageNumber);
    params = params.append('pageSize', shopParams.pageSize);
    params = params.append('search', shopParams.search);

    return this.http.get<Pagination<Product[]>>(this.baseUrl + 'products', {params});
  }

  getProduct(id: number) {
    return this.http.get<Product>(this.baseUrl + 'products/' + id);
  }


  getBrands() {
    return this.http.get<Brand[]>(this.baseUrl + 'products/brands');
  }

  getTypes() {
    return this.http.get<Type[]>(this.baseUrl + 'products/types');
  }
}
