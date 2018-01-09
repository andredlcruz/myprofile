import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-home',
  selector: 'home-info',
  templateUrl: './home-info.component.html',
  styleUrls: ['./home-info.component.css']
})


export class HomeInfoComponent implements OnInit {
  Description = 'Welcome to my web app. It was designed with Angular and Firebase';
  Bio = "Andre De La Cruz graduated from the University of Texas at El Paso in 2013 with a degree in Computer Science. His area of focus includes web development and creating single page apps in Angular and HTML. Other interest includes programming in C# and Java.  A long term goal is to secure a position as a .NET developer. Andre has expressed interest in enhancing his skills in C#, MVC and LINQs. “I would like my career path to include Microsoft technologies and programming with C# and ASP.NET'"
  constructor() {}

    ngOnInit() {}
  
}
