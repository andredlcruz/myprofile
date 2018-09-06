import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-home',
  selector: 'home-skill',
  templateUrl: './home-skill.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeSkillComponent implements OnInit {

  overmouse: boolean = false; 
  pldisplay: boolean = false; 
  webdevdisplay: boolean = false;
  devtoolsdisplay: boolean = false;
  osdisplay: boolean = false;
  extendedSkillSet: any; 
  
  constructor() {}

    ngOnInit() {}

    test() {
      console.log("mouseover works"); 
      this.overmouse = true; 
    }

    displaySkillset(e){

    this.setAllFalse(); 

    switch(e)  {
       
    case 1: this.pldisplay = true; 
            this.extendedSkillSet = '<p>public class HelloWorld { public static void main(String[] args) {   System.out.println("Hello, World");              }</p>'
                                   + '<p>Objected Oriented, Data Structures, and Algorithms: Bubble Sort, Merge Sort, Divide and Conquer </p>'
                                   + '<p>Arrays, Linklist, Stack and Queues</p>'
                                   + '<p>LINQ: .NET Language-Integrated Query </p>'
              
            break; 
    case 2: this.webdevdisplay = true;
           this.extendedSkillSet =  '<p> AngularCli, AngularFire, TypeScript, HTML5, JQuery</p>'
                                  + '<p> Material.io, Materialize.CSS, Bootstrap</p>'
                                  + '<p> Firebase, JSON, Observables, Subcribe</p>'
                                     
            break; 

    case 3: this.devtoolsdisplay = true; 
            this.extendedSkillSet = '<p>.NET: MVC, Webforms, Add-ins (Plug-ins for Office Applications)</p>'
                                  + '<p>Executing and running SQL queries</p>'
                                  + '<p>SELECT * FROM TABLE</p>'
           break; 

    case 4: this.osdisplay = true; 
            this.extendedSkillSet = '<p>PC support and troubleshoot</p>'
                                    + '<p>Linux commands</p>'
            break; 
     }
      
    }

    setAllFalse() {
      this.osdisplay = this.pldisplay = this.webdevdisplay = this.devtoolsdisplay = this.osdisplay = false; 
    }
  
}