import { Component,OnInit } from "@angular/core";
import { Bulkdataservice } from '../services/bulkdata.service'; 
import { Product } from './product'


@Component({
  selector :'app-product',
  templateUrl:'./product.component.html',
  styleUrls: ['./product.component.css'],
   

}) 
 export class ProductComponent implements OnInit{
  products : Array<Product>;

  constructor(private product: Bulkdataservice) {}


  ngOnInit(): void {
    this.product.getProducts().subscribe((data: any[]) => {
      this.products = (data as any).products; 
      console.log(this.products);
      console.log(data);
    });
  }



 }