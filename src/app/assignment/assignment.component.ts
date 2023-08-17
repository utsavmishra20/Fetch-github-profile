import { Component } from '@angular/core';
import { ApiserviceService } from './apiservice.service';

@Component({
  selector: 'add-file',
  templateUrl: './assignment.component.html',
  styleUrls:['./assignment.component.css']
})
export class Assignmentcomponent { 
    name:any;
    show:boolean=false;
    newdata:any;
    repodata:any;
    
    constructor(private _apiservice:ApiserviceService){}
    addcontent(){ 
     {
      this._apiservice.ut = this.name;
      this._apiservice.getdata().subscribe(res=>{
        this.newdata=res;
      })
      this._apiservice.repository=this.newdata.repos_url;
      this._apiservice.getrepo().subscribe(res=>{
        this.repodata=res;
      })
      //for(var i=0 ; i<this.repodata.length ; i++)
      if(this.newdata.login){
        this.show=true
      } 
      else{
        this.show=false;
      } 
     }
  }
    
   
}
