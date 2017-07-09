import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserModule } from './user/user.module';

import { PageNotFoundComponent } from './shared/404.component';
import { VerticalComponent } from './vertical/vertical.component';

const routes: Routes = [
  { path: '', redirectTo: 'vertical', pathMatch: 'full' },
  { path: 'vertical', component: VerticalComponent},
  { path: 'user', loadChildren: './user/user.module#UserModule' },
  { path: '**', component: PageNotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
