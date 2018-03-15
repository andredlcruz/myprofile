import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatMenuModule,
        MatToolbarModule, MatIconModule, MatGridListModule } from '@angular/material';

import { AppComponent } from './app.component';
import {RouterModule, Routes}  from '@angular/router';
import { AngularFireModule, } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

import 'hammerjs';


import { HomeComponent } from './home/home.component';
import { HomeInfoComponent } from './home/home-info.component'; 
import { ProfileComponent } from './profile/profile.component';
import { EducationComponent } from './profile/education.component';
import { HistoryComponent } from './profile/history.component';
import { StatementComponent } from './profile/statement.component'; 
import { ContactComponent } from './profile/contact.component'; 
import { DashboardComponent } from './dashboard/dashboard.component';
import { PhotosComponent } from './photos/photos.component';
import { ReversePipe } from './reverse.pipe';
import { FilterhistoryPipe } from './filterhistory.pipe';



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
    ProfileComponent,  HomeInfoComponent, 
    EducationComponent, 
    HistoryComponent, 
    StatementComponent, 
    ContactComponent,
    PhotosComponent, DashboardComponent, ReversePipe, FilterhistoryPipe  
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule, MatButtonModule, MatCardModule, MatMenuModule,
    MatToolbarModule, MatIconModule, MatGridListModule, RouterModule.forRoot(appRoutes),
    AngularFirestoreModule, AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
