import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterStateSerializer } from '@ngrx/router-store';
import { HttpServiceInterceptor } from './http.interceptor';
import { CustomRouterStateSerializer } from './custom-router-state-serializer';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpServiceInterceptor, multi: true },
    { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer }
  ],
  declarations: []
})
export class CoreModule { }
