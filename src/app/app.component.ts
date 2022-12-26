import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'We are on App Component';

  ngOnInit(){
    //alert("OKOOK");
  }

  sayAlert() {
    alert("Hello Message");
  }

  /// your code here
}
