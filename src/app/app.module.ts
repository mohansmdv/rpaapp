import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';

import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardFirstlineComponent } from './dashboard-firstline/dashboard-firstline.component';
// import { RPA_PROCESSES } from './mock-processes';
import { GetCountbyLOB } from './count-byLOB.pipe';
import { ResourcesComponent } from './resources/resources.component';


@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    AppHomeComponent,
    DashboardComponent,
    DashboardFirstlineComponent,
    GetCountbyLOB,
    ResourcesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[GetCountbyLOB]
})
export class AppModule { }
