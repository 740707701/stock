import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TaskListComponent } from './task-list/task-list.component';
import { PersonalCenterComponent } from './personal-center/personal-center.component';
import { StockComponent } from './stock/stock.component';
import { CompetitionListComponent } from './competition-list/competition-list.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'task-list', component: TaskListComponent },
    { path: 'personal-center', component: PersonalCenterComponent },
    { path: 'stock', component: StockComponent },
    { path: 'competition-list', component: CompetitionListComponent},
    { path: 'login', component: LoginComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}