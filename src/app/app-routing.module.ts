import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ConfirmGuard } from './confirm.guard';
import { CustomPreloadingService } from './custom-preloading.service';
import { HeroComponent } from './hero/hero.component';
import { HeroDetailResolverService } from './heroes/hero-detail/hero-detail-resolver.service';
import { HeroDetailComponent } from './heroes/hero-detail/hero-detail.component';
import { HeroListComponent } from './heroes/hero-list/hero-list.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactiveLoginComponent } from './reactive-login/reactive-login.component';

const routes: Routes = [
  {
    path: 'heroes',
    component: HeroListComponent,
    children: [
      {
        path: ':id',
        component: HeroDetailComponent,
        // canActivate: [AuthGuard],
        // canDeactivate: [ConfirmGuard],
        resolve: { hero: HeroDetailResolverService },
      },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: 'hero', component: HeroComponent },
  { path: 'reactive-login', component: ReactiveLoginComponent },
  { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule), canLoad: [AuthGuard], data: {preload : true} },
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: CustomPreloadingService, enableTracing: true})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
