import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './core/auth-guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { 
    path: 'members', loadChildren: 'app/member-list/member-list.module#MemberListModule', 
    canActivate: [ AuthGuard ] // canLoad doesn't work cuz it doesn't load the module
  },
  { 
    path: 'member/:memberId', loadChildren: 'app/member-detail/member-detail.module#MemberDetailModule', 
    canActivate: [ AuthGuard ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
