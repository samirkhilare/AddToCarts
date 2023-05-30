import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartItem } from './cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }

  url="http://localhost:3000/cart";


  add(data:CartItem){
    console.log(data);
    
    return this.http.post('http://localhost:3000/cart/',data)
  }

  get(){
    return this.http.get(this.url);
   }

   remove(id: any) {
    const urlWithId = `${this.url}/${id}`;
    return this.http.delete(urlWithId);
  }

  update(data:any){
    return this.http.put(`http://localhost:3000/cart/${data.id}`,data)
  }

}
