import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input() item: any = {};
  addButton:boolean = false
  amount:number = 1
@Output()  data = new EventEmitter()



  add(){
    this.data.emit({item:this.item , quantity:this.amount})
  }
}
