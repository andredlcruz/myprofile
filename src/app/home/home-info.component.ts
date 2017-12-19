import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-home',
  selector: 'home-info',
  templateUrl: './home-info.component.html',
  styleUrls: ['./home-info.component.css']
})


export class HomeInfoComponent implements OnInit {
  Description = 'Welcome to my web app. It was designed with Angular and Firebase. Looking to enhance my skills in web programing. My main interest is C# and Angular.';
  constructor() {}

    ngOnInit() {}
  
}
