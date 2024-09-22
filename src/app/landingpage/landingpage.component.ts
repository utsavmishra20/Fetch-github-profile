import { Component } from '@angular/core';
import { ApiserviceService } from '../landingpage/apiservice.service';


@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent {
  name: any;
  show: boolean = false;
  newdata: any;
  repodata: any;

  constructor(private _apiservice: ApiserviceService) { }
  async addcontent() {
    {
      this._apiservice.ut = this.name;
      this._apiservice.getdata().subscribe(res => {
        this.newdata = res;
      })
      this._apiservice.repository = this.newdata.repos_url;
      this._apiservice.getrepo().subscribe(res => {
        this.repodata = res;
      })
      //for(var i=0 ; i<this.repodata.length ; i++)
      if (this.newdata.login) {
        this.show = true
      }
      else {
        this.show = false;
      }

    }
  }

}
