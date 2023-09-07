import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { SpinerComponent } from './components/spiner/spiner.component';
import { SelsectComponent } from './components/selsect/selsect.component';


import { ProducttComponent } from './components/productt/productt.component';




@NgModule({
  declarations: [
    HeaderComponent,
    SpinerComponent,
    SelsectComponent,
    ProducttComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  exports: [
    HeaderComponent,
    SpinerComponent,
    SelsectComponent,
    ProducttComponent,
    FormsModule,
    RouterModule,
  ],
})
export class SharedModule {}
