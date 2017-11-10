import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { MemberDetailEffects } from './effects/member-detail';
import { MVASharedModule } from '../shared/shared.module';
import { MemberDetailRoutingModule } from './member-detail-routing.module';
import { MemberDetailComponent } from './member-detail.component';
import { MemberDetailService } from './member-detail.service';

@NgModule({
  imports: [
    CommonModule,
    MemberDetailRoutingModule,
    MVASharedModule,
    
    EffectsModule.forFeature([MemberDetailEffects])    
  ],
  declarations: [ MemberDetailComponent ],
  providers: [ MemberDetailService ]
})
export class MemberDetailModule { }
