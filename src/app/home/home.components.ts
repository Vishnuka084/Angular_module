import {Component} from "@angular/core";

@Component({
  selector:'app-home',
  templateUrl:'./home.component.html',
  styleUrls:['./home.component.css']
})
export class HomeComponents{


  setData(value:string){
    console.log(value)
  }


}
