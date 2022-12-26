import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  about_message = "We are on about page";

  number1 = 111;
  
  constructor(){}

  ngOnInit(){}



}
