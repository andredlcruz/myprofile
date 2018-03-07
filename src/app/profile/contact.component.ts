import { Component, OnInit } from '@angular/core';
import {FbProfileService } from "../fb-profile.service"; 
import { Observable } from 'rxjs/Observable'

@Component({
    selector: 'contact',
    templateUrl: './contact.component.html',
    providers: [FbProfileService],
    styleUrls: ['./profile.component.css']
  })


export class ContactComponent implements OnInit{


    constructor() {}

    ngOnInit() {}
}
