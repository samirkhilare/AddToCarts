import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';
import { CartItem } from '../cart-item';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private api: ApiService, private cart: CartService) { }


  cartArray: any[] = [];
  searchString: any

  ngOnInit() {
    debugger
    this.getData();

    this.api.search.subscribe((data: any) => {
      this.searchString = data
    })
  }

  getData() {
    this.api.getdata().subscribe((data: any) => {
      console.log(data);
      this.cartArray = data

    })

  }

  addToCart(item: CartItem) {
    this.cart.add(item).subscribe((data: any) => {
    });
    window.location.reload()
  }





  // dataarray:any[]=[];

  // formdata!:FormGroup
  //  localdata!:FormGroup;

  //  constructor(private fb:FormBuilder,private httpss:ApiService){
  //   this.localdata=fb.group({
  //     fname:new FormControl("",[Validators.required]),
  //       lname: new FormControl("",[Validators.required]),
  //       mno:new FormControl("",[Validators.required,Validators.minLength(10)]),
  //       addres:new FormControl("",[Validators.required])
  //   })
  //  }


  // localdata!: FormGroup;
  // ngOnInit(): void {

  //   this.get();
  // }

  // get(){
  //   this.httpss.getdata().subscribe((data:any)=>{
  //     this.dataarray=data;
  //     console.log(data,"samir");

  //   })
  // }

  // onSave(){
  //   this.httpss.savedata(this.localdata.value).subscribe((res:any)=>{
  //     console.log(res);
  //     console.log("working");
  //     this.localdata.reset();

  //   });
  // }

  // submit(){

  // }




  searchTerm: any;
  // user:any[]=[
  //   {name:"samir",mobile:9970562207,add:"pune",age:24},
  //   {name:"karan",mobile:9970562207,add:"pune",age:18},
  //   {name:"Shubham",mobile:9970562207,add:"pune",age:24},
  //   {name:"Raju",mobile:9970562207,add:"pune",age:24},
  //   {name:"Sumit",mobile:9970562207,add:"pune",age:24},
  //   {name:"Rutik",mobile:9970562207,add:"pune",age:24},
  //   {name:"Lucky",mobile:9970562207,add:"pune",age:20},
  //   {name:"Rocky",mobile:9970562207,add:"pune",age:24}
  // ];




}
