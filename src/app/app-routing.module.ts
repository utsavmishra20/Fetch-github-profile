import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondpageComponent } from './secondpage/secondpage.component';
import { LandingpageComponent } from './landingpage/landingpage.component';

const routes: Routes = [
  { path: 'landingpage', component: LandingpageComponent },
  { path: 'secondpage', component: SecondpageComponent },
  { path: '', redirectTo: 'landingpage', pathMatch: 'full' },
  { path: '***', component: LandingpageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  name: any;
  show: boolean = false;
  newdata: any;
  repodata: any;
}
