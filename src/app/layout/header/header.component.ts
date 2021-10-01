import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  buttonState : boolean = false;
  @Output() toggleSidebar : EventEmitter<boolean> = new EventEmitter<boolean>(this.buttonState);

  constructor() { }

  ngOnInit() {

  }

  onMenuBtnclick(){
    this.buttonState = !this.buttonState;
    this.toggleSidebar.emit(this.buttonState);
  }

}
