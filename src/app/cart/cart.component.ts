import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  dataArray: any[] = [];

  constructor(private cart: CartService, private route: Router) { }

  ngOnInit() {

    this.getData();
  }

  getData() {
    this.cart.get().subscribe((data: any) => {
      this.dataArray = data;
      console.log(data, "samir");


    });
  }

  qtyInc(data: any) {
    if (data.qty < 10)
      data.qty++
    data.total = data.qty * data.price
    this.cart.update(data).subscribe((data: any) => {

    })


  }

  qtyDcr(data: any) {
    if (data.qty > 1)
      data.qty--

    data.total = data.qty * data.price
    this.cart.update(data).subscribe((data: any) => {

    })
  }

  delete(id: any) {
    this.cart.remove(id).subscribe((data: any) => {

    })
    this.getData();
  }




}
