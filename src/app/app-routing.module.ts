import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponents} from "./home/home.components";
import {CustomerComponent} from "./customer/customer.component";
import {OrdersComponent} from "./orders/orders.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {NewComponent} from "./orders/inner-items/new/new.component";
import {DeleteComponent} from "./orders/inner-items/delete/delete.component";
import {GetComponent} from "./orders/inner-items/get/get.component";

const routes: Routes = [
  {path:'',redirectTo:'./home',pathMatch:'full'},
  {path:'home',component:HomeComponents},
  {path:'customer/:data',component:CustomerComponent},
  {path:'orders',component:OrdersComponent,children:[

      {path: '', redirectTo:'/orders/new',pathMatch:'full'},
      {path:'new',component:NewComponent},
      {path:'delete',component:DeleteComponent},
      {path:'get',component:GetComponent}

    ]},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
