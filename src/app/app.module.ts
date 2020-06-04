import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';

import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardFirstlineComponent } from './dashboard-firstline/dashboard-firstline.component';

import { GetCountbyLOB } from './count-byLOB.pipe';
import { ResourcesComponent } from './resources/resources.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[GetCountbyLOB]
})
export class AppModule { }
