import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  InputTextModule, DataTableModule, SharedModule, 
  ButtonModule, EditorModule, RadioButtonModule, Message,
  CalendarModule, CheckboxModule, DropdownModule,
  GrowlModule, PanelModule, FieldsetModule, DialogModule
} from 'primeng/primeng';
import { MemberUpsertComponent } from './member-upsert/member-upsert.component';

export const PRIMENG_MODULES = [
  ButtonModule,
  InputTextModule,
  DataTableModule,
  EditorModule,
  SharedModule,
  RadioButtonModule,
  CheckboxModule,
  CalendarModule,
  GrowlModule,
  PanelModule,
  FieldsetModule,
  DropdownModule,
  DialogModule
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PRIMENG_MODULES
  ],
  exports: [
    FormsModule,
    PRIMENG_MODULES,

    MemberUpsertComponent
  ],
  declarations: [MemberUpsertComponent]
})
export class MVASharedModule { }
