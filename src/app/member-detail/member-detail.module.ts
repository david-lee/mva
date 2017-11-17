import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { MemberDetailEffects } from './effects/member-detail';
import { MVASharedModule } from '../shared/shared.module';
import { MemberDetailRoutingModule } from './member-detail-routing.module';
import { MemberDetailComponent } from './member-detail.component';
import { MemberDetailService } from './member-detail.service';
import { AuditService } from './audit/audit.service';
import { AccountComponent } from './account/account.component';
import { BiometricsComponent } from './biometrics/biometrics.component';
import { BioUpsertComponent } from './bio-upsert/bio-upsert.component';
import { AuditComponent } from './audit/audit.component';

@NgModule({
  imports: [
    CommonModule,
    MemberDetailRoutingModule,
    MVASharedModule,
    
    EffectsModule.forFeature([MemberDetailEffects])    
  ],
  declarations: [ MemberDetailComponent, AccountComponent, BiometricsComponent, BioUpsertComponent, AuditComponent ],
  providers: [ MemberDetailService, AuditService ]
})
export class MemberDetailModule { }
