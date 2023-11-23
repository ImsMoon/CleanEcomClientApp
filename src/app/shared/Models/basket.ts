import * as cuid from 'cuid';
import { Interface } from 'readline';


export interface Basket {
    id: string;
    items: BasketItem[];
}

export interface BasketItem {
    id: number;
    productName: string;
    price: number;
    quantity: number;
    pictureUrl: string;
    brand: string;
    type: string;
}

export class Baskets implements Basket{
    id = cuid();
    items: BasketItem[] = [];

}

export interface BasketTotal{
    shipping:number;
    subtotal:number;
    total:number;
}