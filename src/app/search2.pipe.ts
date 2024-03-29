import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search2'
})
export class Search2Pipe implements PipeTransform {

  transform(product:any, searchtxt:any): any {
    if(!searchtxt)
    return product;

    searchtxt = searchtxt.toLowerCase();

    return product.filter((data: any)=>{
        return JSON.stringify(data).toLowerCase().includes(searchtxt);
    });
  }

}
