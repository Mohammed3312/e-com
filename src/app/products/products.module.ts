import { SelsectComponent } from './../shared/components/selsect/selsect.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllproductsComponent } from './components/allproducts/allproducts.component';
import { ProductComponent } from './components/product/product.component';
import { SharedModule } from "../shared/shared.module";
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';



@NgModule({
    declarations: [
        AllproductsComponent,
        ProductComponent,
        ProductdetailsComponent
    ],
    exports: [
        AllproductsComponent,
        ProductComponent
    ],
    imports: [
        CommonModule,
        SharedModule,

    ]
})
export class ProductsModule { }
