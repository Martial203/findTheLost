
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LandingPageComponent } from './landing-page/components/landing-page/landing-page.component';
import { MainPageComponent } from './user-area/components/main-page/main-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: LandingPageComponent },
  { path: 'main-page', component: MainPageComponent, loadChildren: () => import('./user-area/user-area-routing.module').then(m => m.UserAreaRoutingModule) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class FeatureRoutingModule {}
