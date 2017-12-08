import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'members', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'members', loadChildren: 'app/member-list/member-list.module#MemberListModule'},
  { path: 'member/:memberId', loadChildren: 'app/member-detail/member-detail.module#MemberDetailModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
