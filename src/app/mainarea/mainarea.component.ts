import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainarea',
  templateUrl: './mainarea.component.html',
  styleUrls: ['./mainarea.component.css']
})
export class MainareaComponent implements OnInit {
  
  
  
 

  Tasks = [
            {"name":"Bharathi", "Job": "FrontEnd Developer" , "City": "Chicago"},
            {"name":"Narayana", "Job": "Data Engineer", "City": "Frisco"}, 
            {"name":"Himaja", "Job": "FullStack Developer", "City": "Rhode Island"},  
            {"name":"Revathi", "Job": "DayCare Teacher", "City": "Mckiney"}
         ];
  
  
   constructor() { }

  ngOnInit() {
  }

}

