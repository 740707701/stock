import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; //http
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService } from './';

import { AppRoutingModule } from './app-routing.module'; //router
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



import { AppComponent } from './app.component';

//首页
import { HomeComponent } from './home/home.component';
import { ClassListComponent } from './class-list/class-list.component';
import { PersonalCenterComponent } from './personal-center/personal-center.component';
import { StockComponent } from './stock/stock.component';
import { CompetitionListComponent } from './competition-list/competition-list.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClassListComponent,
    PersonalCenterComponent,
    StockComponent,
    CompetitionListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
