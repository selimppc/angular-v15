import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  private contact_message = "We are on contact page";
  
  constructor(){}

  ngOnInit(){}
}
