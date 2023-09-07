import { ProductsService } from './../../service/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
id:any;
data:any;
isLoading:boolean = false

  constructor(private route:ActivatedRoute, private service:ProductsService){
this.id = this.route.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    //console.log(this.id)
      this.getItem()
  }
getItem(){
  this.isLoading = true
  this.service.getProductById(this.id).subscribe((res)=>{
    this.data = res
    this.isLoading = false
  })
}
}
