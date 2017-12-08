import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterStateSerializer } from '@ngrx/router-store';

import { LocalStorageService } from './local-storage.service';
import { HttpServiceInterceptor } from './http.interceptor';
import { CustomRouterStateSerializer } from './custom-router-state-serializer';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    LocalStorageService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpServiceInterceptor, multi: true },
    { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer }
  ],
  declarations: []
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only.');
    }
  }
}

