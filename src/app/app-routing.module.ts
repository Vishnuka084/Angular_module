import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponents} from "./home/home.components";
import {CustomerComponent} from "./customer/customer.component";
import {OrdersComponent} from "./orders/orders.component";
import {NotFoundComponent} from "./not-found/not-found.component";

const routes: Routes = [
  {path:'',redirectTo:'./home',pathMatch:'full'},
  {path:'home',component:HomeComponents},
  {path:'customer',component:CustomerComponent},
  {path:'orders',component:OrdersComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
