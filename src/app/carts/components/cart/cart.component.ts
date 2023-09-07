import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartProduct: any[] = [];
  total: any;
  success:boolean= false


  constructor(private service:CartService){}

  ngOnInit(): void {
    this.getCartProducts();
  }

  getCartProducts() {
    if ('cart' in localStorage) {
      this.cartProduct = JSON.parse(localStorage.getItem('cart')!);
    }
    this.getTotalPrice();
    console.log(this.cartProduct);
  }
  addQuantity(index: any) {
    this.cartProduct[index].quantity++;
    localStorage.setItem('cart', JSON.stringify(this.cartProduct));
    this.getTotalPrice();
  }
  removeQuantity(index: any) {
    this.cartProduct[index].quantity--;
    localStorage.setItem('cart', JSON.stringify(this.cartProduct));
    this.getTotalPrice();
  }
  getTotalPrice() {
    this.total = 0;
    for (let x in this.cartProduct) {
      this.total +=
        this.cartProduct[x].item.price * this.cartProduct[x].quantity;
    }
    console.log(this.total);
  }
  onChange() {
    localStorage.setItem('cart', JSON.stringify(this.cartProduct));
    this.getTotalPrice();
  }
  deleteProduct(index: number) {
    this.cartProduct.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(this.cartProduct));
    this.getTotalPrice();
  }
  clearShoppingCart(){
    this.cartProduct = []
    this.getTotalPrice()
    localStorage.setItem('cart', JSON.stringify(this.cartProduct));
  }


  addCart(){
let productss = this.cartProduct.map(item=>{
  return {productId:item.item.id, quantity:item.quantity}
})
    let data = {
      userId: 5,
      date: new Date(),
      products: productss
    };
    this.service.addNewCart(data).subscribe((res)=>{
      this.cartProduct = []
localStorage.setItem('cart', JSON.stringify(this.cartProduct));
      this.success = true
      setTimeout(()=>{
        this.success = false
      },6000)
    })

  }
}
