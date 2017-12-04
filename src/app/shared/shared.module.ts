import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule, DataTableModule, SharedModule, ButtonModule, EditorModule,
  RadioButtonModule, Message, CalendarModule, CheckboxModule, DropdownModule,
  GrowlModule, PanelModule, FieldsetModule, DialogModule, MessageModule, MessagesModule
} from 'primeng/primeng';
import { MemberUpsertComponent } from './member-upsert/member-upsert.component';
import { ForbiddenDobDirective } from './forbidden-dob.directive';
import { EllipsisPipe } from './ellipsis.pipe';
import { InvalidSinDirective } from './invalid-sin.directive';
import { CodeNamePipe } from './code-name.pipe';
import { MvaLogoComponent } from './mva-logo/mva-logo.component';

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
  DialogModule,
  MessageModule, 
  MessagesModule
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

    MemberUpsertComponent,
    ForbiddenDobDirective,
    InvalidSinDirective,
    EllipsisPipe,
    CodeNamePipe,
    MvaLogoComponent
  ],
  declarations: [
    MemberUpsertComponent,
    ForbiddenDobDirective,
    EllipsisPipe,
    InvalidSinDirective,
    CodeNamePipe,
    MvaLogoComponent
  ]
})
export class MVASharedModule { }
