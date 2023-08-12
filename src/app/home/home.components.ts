import {Component} from "@angular/core";

@Component({
  selector:'app-home',
  templateUrl:'./home.component.html',
  styleUrls:['./home.component.css']
})
export class HomeComponents{

  data:string=' ';


  setData(value:string){
    this.data=value;
  }

  pintData():void{
    console.log(this.data)
  }
}
