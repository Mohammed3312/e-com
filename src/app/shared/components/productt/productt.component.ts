import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-productt',
  templateUrl: './productt.component.html',
  styleUrls: ['./productt.component.css']
})
export class ProducttComponent {
  @Input() item:any = {}

}
