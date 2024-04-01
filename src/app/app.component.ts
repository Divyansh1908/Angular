import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'divyansh-list';

  /*Change the title in the main screen without reloading the screen after 2000ms */
  /*
  constructor(){
    setTimeout(()=> {
      this.title = "Changes the title now";
    }, 2000);
  }
  */

}
