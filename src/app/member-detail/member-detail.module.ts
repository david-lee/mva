import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberDetailRoutingModule } from './member-detail-routing.module';
import { MemberDetailComponent } from './member-detail.component';
import { MemberDetailService } from './member-detail.service';

@NgModule({
  imports: [
    CommonModule,
    MemberDetailRoutingModule
  ],
  declarations: [MemberDetailComponent],
  providers: [
    MemberDetailService
  ]  
})
export class MemberDetailModule { }
