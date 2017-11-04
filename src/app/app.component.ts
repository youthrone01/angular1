import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  mails: object[]=[
    { email:"bill@gate.com", importance:true, subject: "New Windowns", content:'Windows XI will lanuch in year 2100.'},
    { email:"ada@lovelace.com", importance:true, subject: "Programming", content:'Enchantress of Number.'},
    { email:"john@carmac.com", importance:false, subject: "Updated Algo", content:'New algorithm for shadow volumes.'},
    { email:"gabe@newel.com", importance:false, subject: "HL3!", content:'Just kidding....'}

  ]

  colors= ["Aqua","CadetBlue","Crimson","DarkGray","DarkMagenta","DarkSlateBlue","Gold","LightBlue","RoyalBlue",
   "SandyBrown", "SteelBlue", "Tomato","Olive"]

   shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

  ngOnInit() {
    this.shuffle(this.colors);
  }
  
  
}
