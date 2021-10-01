import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'users-group';
  opened = false;

  toggleSidebar($event){
    this.opened = $event;
  }
}
