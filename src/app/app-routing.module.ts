import { ProductdetailsComponent } from './products/components/productdetails/productdetails.component';
import { CartComponent } from './carts/components/cart/cart.component';
import { AllproductsComponent } from './products/components/allproducts/allproducts.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'products', component: AllproductsComponent },
  { path: 'carts', component: CartComponent },
  {path:'details/:id',component:ProductdetailsComponent},
  { path: '**', redirectTo: 'products',pathMatch:'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
