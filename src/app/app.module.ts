import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeComponents} from "./home/home.components";
import {FormsModule} from "@angular/forms";
import { CustomerComponent } from './customer/customer.component';
import { OrdersComponent } from './orders/orders.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { NewComponent } from './orders/inner-items/new/new.component';
import { DeleteComponent } from './orders/inner-items/delete/delete.component';
import { GetComponent } from './orders/inner-items/get/get.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponents,
    CustomerComponent,
    OrdersComponent,
    NotFoundComponent,
    NotFoundPageComponent,
    NewComponent,
    DeleteComponent,
    GetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
