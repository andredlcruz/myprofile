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



const appRoutes: Routes =[
  { path: 'home', component: HomeComponent }, 
  { path: 'profile', component: ProfileComponent}, 
  { path: '', redirectTo: 'home', pathMatch: 'full'}
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent, 
    HomeInfoComponent
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
