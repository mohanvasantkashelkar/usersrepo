import { UserDeleteComponent } from './../user-delete/user-delete.component';
import { MatDialog, MatPaginator, MatTableDataSource, MAT_DIALOG_DATA } from '@angular/material';
import { UserService } from './../../services/user.service';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserEditComponent } from '../user-edit/user-edit.component';

@Component({
  selector: 'app-users-listing',
  templateUrl: './users-listing.component.html',
  styleUrls: ['./users-listing.component.scss']
})
export class UsersListingComponent implements OnInit {
  @ViewChild(MatPaginator,{ static: true }) paginator: MatPaginator;
  displayedColumns = ["name", "email", "gender", "address", "dateOfBirth", "actions"];
  dataSource : MatTableDataSource<any>;

  constructor(
    private userService: UserService,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.userService.getUsers().subscribe((response : [])=>{
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
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

  getProgressByColumn(columnName:string, columnValue:string):number{

    let count = this.dataSource.data.filter((data)=>{
      return data[columnName].toLowerCase() === columnValue.toLowerCase();
    }).length;

    return count;
  }
}