import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroListComponent } from './hero-list/hero-list.component';
import { FavoriteHeroesComponent } from './favorite-heroes/favorite-heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HeroService } from './hero.service';


@NgModule({
  declarations: [HeroListComponent, FavoriteHeroesComponent, HeroDetailComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule
  ],
  exports: [
    HeroListComponent,
    
  ],
  providers: [
    HeroService
  ]
})
export class HeroesModule { }
