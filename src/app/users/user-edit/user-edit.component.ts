import { MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as _moment from 'moment';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  editForm : FormGroup;  

  constructor(
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {

    this.editForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      gender: ['male'],
      dateOfBirth: ['',[Validators.required]],
      address: ['', [Validators.required]]
    });

    // prefill when edit
    this.editForm.patchValue(this.data.editContent);

    this.editForm.get('dateOfBirth').setValue( _moment(this.data.editContent.dateOfBirth));
  }

}
