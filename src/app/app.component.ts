import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  mails: object[]=[
    { email:"bill@gate.com", importance:true, subject: "New Windowns", content:'Windows XI will lanuch in year 2100.'},
    { email:"ada@lovelace.com", importance:true, subject: "Programming", content:'Enchantress of Number.'},
    { email:"john@carmac.com", importance:false, subject: "Updated Algo", content:'New algorithm for shadow volumes.'},
    { email:"gabe@newel.com", importance:false, subject: "HL3!", content:'Just kidding....'}

  ]
}
