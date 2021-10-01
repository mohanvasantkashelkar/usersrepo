import { UserDeleteComponent } from './../user-delete/user-delete.component';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { UserService } from './../../services/user.service';
import { Component, Inject, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserEditComponent } from '../user-edit/user-edit.component';

@Component({
  selector: 'app-users-listing',
  templateUrl: './users-listing.component.html',
  styleUrls: ['./users-listing.component.scss']
})
export class UsersListingComponent implements OnInit {
  displayedColumns = ["name", "email", "gender", "address", "dateOfBirth", "actions"];
  dataSource = [];
  dataSourceObserve : BehaviorSubject<any> = new BehaviorSubject(this.dataSource);
  constructor(
    private userService: UserService,
    private dialog: MatDialog) { }

  ngOnInit() {

    this.userService.getUsers().subscribe((response : any)=>{
      this.dataSource = response;
      this.dataSourceObserve.next( response );
    });
  }


  onEdit(editContent : any){
    this.dialog.open(UserEditComponent,{
      width: "740px",
      data : {
        editContent : editContent
      }
    });
  }

  onDelete(deleteContent : any){
    this.dialog.open(UserDeleteComponent,{
      width: "740px",
      data : {
        deleteContent : deleteContent
      }
    });
  }
}


export class User{

}
