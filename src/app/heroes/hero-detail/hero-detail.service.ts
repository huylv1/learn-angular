import { Injectable } from '@angular/core';
import { Hero } from 'src/app/model/hero';
import { HeroService } from '../hero.service';

@Injectable(  
  
)
export class HeroDetailService {
  private hero: Hero;

  constructor(private heroService: HeroService) { }

  getHero(id: number): Hero {
    this.heroService.getHeroes().subscribe(heroes => {
      if (!this.hero) {
        this.hero = heroes.find(hero => hero.id === id);
      }
    });
    
    return this.hero;
  }
}
