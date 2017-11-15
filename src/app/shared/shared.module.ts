import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  DataTableModule, SharedModule, 
  ButtonModule, EditorModule,
  RadioButtonModule, Message,
  CalendarModule, CheckboxModule, DropdownModule,
  GrowlModule, PanelModule, FieldsetModule
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
    CheckboxModule,
    CalendarModule,
    GrowlModule,
    PanelModule,
    FieldsetModule,
    DropdownModule
  ],
  declarations: []
})
export class MVASharedModule { }
