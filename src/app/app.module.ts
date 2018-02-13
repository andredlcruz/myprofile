import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatMenuModule,
        MatToolbarModule, MatIconModule, MatGridListModule } from '@angular/material';

import { AppComponent } from './app.component';
import {RouterModule, Routes}  from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

import 'hammerjs';


import { HomeComponent } from './home/home.component';
import { HomeInfoComponent } from './home/home-info.component'; 
import { ProfileComponent } from './profile/profile.component';
<<<<<<< HEAD
import { EducationComponent } from './profile/education.component';
import { HistoryComponent } from './profile/history.component';
import {StatementComponent } from './profile/statement.component'; 
=======
import { PhotosComponent } from './photos/photos.component';
import { DashboardComponent } from './dashboard/dashboard.component';

>>>>>>> 9680d73dcd4cf8fd701e813c632e63c4957addde


const appRoutes: Routes =[
  { path: 'home', component: HomeComponent }, 
  { path: 'profile', component: ProfileComponent}, 
  { path: 'photos', component: PhotosComponent }, 
  { path: 'dashboard', component: DashboardComponent}, 
  { path: '', redirectTo: 'home', pathMatch: 'full'}
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent, 
<<<<<<< HEAD
    HomeInfoComponent, 
    EducationComponent, 
    HistoryComponent, 
   StatementComponent
=======
    HomeInfoComponent, PhotosComponent, DashboardComponent
>>>>>>> 9680d73dcd4cf8fd701e813c632e63c4957addde
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule, MatButtonModule, MatCardModule, MatMenuModule,
    MatToolbarModule, MatIconModule, MatGridListModule, RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
