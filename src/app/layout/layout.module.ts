import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MatIconModule, MatToolbarModule } from '@angular/material';

const COMPONENTS : any = [
  HeaderComponent
]

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    FlexLayoutModule 
  ],
  exports:[
    ...COMPONENTS
  ]
})
export class LayoutModule { }
