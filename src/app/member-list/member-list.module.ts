import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { MemberListEffects } from './effects/member-list';
import { MVASharedModule } from '../shared/shared.module';
import { MemberListRoutingModule } from './member-list-routing.module';
import { MemberListComponent } from './member-list.component';
import { MemberListService } from './member-list.service';

@NgModule({
  imports: [
    CommonModule,
    MemberListRoutingModule,

    MVASharedModule,

    EffectsModule.forFeature([MemberListEffects])
  ],
  declarations: [ MemberListComponent ],
  providers: [ MemberListService ]
})
export class MemberListModule { }
