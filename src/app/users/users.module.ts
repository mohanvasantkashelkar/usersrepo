
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatDatepickerModule, 
  MatDialogModule, 
  MatInputModule, 
  MatPaginatorModule, 
  MatProgressSpinnerModule, 
  MatRadioModule, 
  MatSortModule, 
  MatTableModule,
  MatCardModule, 
  MatDatepicker,
  MatNativeDateModule,
  MatButtonModule,
  MAT_DIALOG_DATA} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersRoutingModule } from './users-routing.module';
import { UsersListingComponent } from './users-listing/users-listing.component';
import { HttpClientModule } from '@angular/common/http';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { MatMomentDateModule } from '@angular/material-moment-adapter';


@NgModule({
  declarations: [
    UsersListingComponent,
    UserEditComponent,
    UserDeleteComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatDatepickerModule,
    MatDialogModule,
    MatCardModule,
    UsersRoutingModule,
    MatNativeDateModule,
    MatButtonModule,
    MatMomentDateModule
  ],
  entryComponents:[
    UserEditComponent,
    UserDeleteComponent
  ]  
})
export class UsersModule { }
