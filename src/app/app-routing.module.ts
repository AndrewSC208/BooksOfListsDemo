import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './shared/404.component';
import { VerticalComponent } from './vertical/vertical.component';

const routes: Routes = [
  { path: '', redirectTo: 'vertical', pathMatch: 'full' },
  { path: 'vertical', component: VerticalComponent},
  { path: '**', component: PageNotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
