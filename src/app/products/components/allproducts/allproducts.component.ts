import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css'],
})
export class AllproductsComponent implements OnInit {
  products: any[] = [];
  Catigories: any[] = [];
  isLoading: boolean = false;
  cartProduct:any[] = []
  constructor(private service: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
    this.getAllCatigories();
  }

  getProducts() {
    this.isLoading = true;
    this.service.getAllProducts().subscribe(
      (items: any) => {
        this.products = items;
        //console.log(items);
        this.isLoading = false;
      },
      (err) => {
        //console.log(err);
        alert('error from products');
      }
    );
  }

  getAllCatigories() {
    this.service.getAllCatigories().subscribe(
      (c: any) => {
        //console.log(c);
        this.Catigories = c;
      },
      (err) => {
        //console.log(err);
        alert('error from catigories');
      }
    );
  }
  filterCat(event: any) {
    let targetValue = event.target.value;
    if (targetValue === 'All') {
      this.getProducts();
    } else {
      this.getCatigories(targetValue);
    }
  }
  getCatigories(keyword: string) {
    this.isLoading = true;
    this.service.getCatigories(keyword).subscribe((res: any) => {
      this.products = res;
      this.isLoading = false;
    });
  }

  addToCart(event:any){
    if('cart' in localStorage){
      this.cartProduct = JSON.parse(localStorage.getItem('cart')!)
      let exist = this.cartProduct.find(item=> item.item.id === event.item.id)
      if(exist){
        alert('thet is an item')
      }else{
        this.cartProduct.push(event)
        localStorage.setItem('cart', JSON.stringify(this.cartProduct));
      }
    } else{
this.cartProduct.push(event);
localStorage.setItem('cart', JSON.stringify(this.cartProduct));
    }
  //this.cartProduct = localStorage.getItem('cart')
  }
}
