import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { MemberDetailEffects } from './effects/member-detail';
import { MVASharedModule } from '../shared/shared.module';
import { MemberDetailRoutingModule } from './member-detail-routing.module';
import { MemberDetailComponent } from './member-detail.component';
import { MemberDetailService } from './member-detail.service';
import { AccountComponent } from './account/account.component';
import { BiometricsComponent } from './biometrics/biometrics.component';

@NgModule({
  imports: [
    CommonModule,
    MemberDetailRoutingModule,
    MVASharedModule,
    
    EffectsModule.forFeature([MemberDetailEffects])    
  ],
  declarations: [ MemberDetailComponent, AccountComponent, BiometricsComponent ],
  providers: [ MemberDetailService ]
})
export class MemberDetailModule { }
