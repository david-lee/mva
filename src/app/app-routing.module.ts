import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'members', pathMatch: 'full' },
  { path: 'members', loadChildren: 'app/member-list/member-list.module#MemberListModule'},
  { path: 'member/:memberId', loadChildren: 'app/member-detail/member-detail.module#MemberDetailModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
