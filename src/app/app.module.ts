import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // http
import { NgCircleProgressModule } from 'ng-circle-progress'; // 圆环渐变
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService } from './';

import { AppRoutingModule } from './app-routing.module'; // router

import { AppComponent } from './app.component';

// 页面引入
import { HomeComponent } from './home/home.component';
import { TaskListComponent } from './task-list/task-list.component';
import { PersonalCenterComponent } from './personal-center/personal-center.component';
import { StockComponent } from './stock/stock.component';
import { CompetitionListComponent } from './competition-list/competition-list.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TaskListComponent,
    PersonalCenterComponent,
    StockComponent,
    CompetitionListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({
      radius: 79,
      backgroundStrokeWidth: 0,
      outerStrokeWidth: 5,
      innerStrokeWidth: 5,
      animationDuration: 300,
      space: -6, // 外圈和内圈之间的空间
      showUnits: false, // 是否显示单位
      titleColor: `#898ba2`,
      subtitleColor: `#898ba2`,
      titleFontSize: `12`,
      subtitleFontSize: `12`,
      clockwise: false // 是否顺时针或逆时针旋转
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
