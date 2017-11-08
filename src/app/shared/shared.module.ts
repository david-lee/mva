import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  DataTableModule, SharedModule, 
  ButtonModule, EditorModule,
  RadioButtonModule, Message,
  CalendarModule
} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    FormsModule,
    ButtonModule,
    DataTableModule,
    EditorModule,
    SharedModule,
    RadioButtonModule,
    CalendarModule    
  ],
  declarations: []
})
export class MVASharedModule { }
