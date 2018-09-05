import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-home',
  selector: 'home-info',
  templateUrl: './home-info.component.html',
  styleUrls: ['./home-info.component.css']
})


export class HomeInfoComponent implements OnInit {
  Description = 'Welcome to my webpage. It was designed and developed in Angular and Materializecss with Firebase in the backend';
  Bio = "Andre De La Cruz graduated from the University of Texas at El Paso in 2013 with a degree in Computer Science. His area of focus includes web development and single page apps (SPA) in Angular and HTML5. Other interest includes programming in C# and Java.  A long term goal is to secure a position as a .NET developer and combing Angular5 to create large scale applications. Andre has aslo expressed interest in programming in C#, SQL, and Python. “I would like my career path to include Microsoft technologies and programming with C# and ASP.NET while enhancing my understanding in web development'"
  constructor() {}

    ngOnInit() {}
  
}
