import { Component,OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ApiService } from '../api.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit  {
 

  constructor(private cart: CartService, private api: ApiService) {}

  Array:[]=[]
  searchTerm:any;
  cartCount: number = 0;
  previousLength: number = 0;

  ngOnInit() {
    this.getData();
  }

  // ngOnChanges() {
  //   this.getData();
  // }

  // ngAfterContentInit() {
  //   this.getData();
  // }

  //   ngAfterViewChecked() {
  //   this.getData();
  // }

  //   ngAfterViewInit() {
  //   this.getData();
  // }

  // ngAfterContentChecked(){
  //   this.getData()
  // }




  getData() {
    this.cart.get().subscribe((data: any) => {
      this.Array = data;
      console.log(data);
      

      this.cartCount = this.Array.length;
    });
  }

 

 

  // getData() {
  //   this.cart.get().subscribe((data: any) => {
  //     this.Array = data;
  //     console.log(data);

  //     const newLength = this.Array.length;
  //     const lengthChange = newLength - this.previousLength;
  //     this.previousLength = newLength;

  //     if (lengthChange !== 0) {
  //       console.log(`Array length changed by ${lengthChange}`);
  //     }

  //     this.cartCount = newLength;
  //   });
  // }

  // getLengthDifference(): number {
  //   return Math.abs(this.cartCount - this.previousLength);
  // }
  search2(event:any){
    this.api.getSearchString(event.target.value)
  } 
}
  

