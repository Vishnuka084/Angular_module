import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponents} from "./home/home.components";
import {CustomerComponent} from "./customer/customer.component";
import {OrdersComponent} from "./orders/orders.component";

const routes: Routes = [
  {path:'home',component:HomeComponents},
  {path:'customer',component:CustomerComponent},
  {path:'orders',component:OrdersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
