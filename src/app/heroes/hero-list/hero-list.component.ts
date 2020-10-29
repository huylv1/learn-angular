import { Component, OnInit } from '@angular/core';
import { appSettings, APP_CONFIG } from 'src/app/app.config';
import { Hero } from 'src/app/model/hero';
import { HeroDetailService } from '../hero-detail/hero-detail.service';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss'],
  viewProviders: [HeroService],
})
export class HeroListComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    // this.heroes = this.heroService.getHeroes();
    this.getHeroes();
  }

  private getHeroes() {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  add(name: string) {
    this.heroService
      .createHero(name)
      .subscribe((hero) => this.heroes.push(hero));
  }

  rename(hero: Hero) {
    const existingHero = { id: hero.id, name: 'Pricezog' };
    this.heroService.editHero(hero.id, existingHero).subscribe(() => {
      this.heroes.find((hero) => hero.id).name = 'Pricezog';
    });
  }

  remove(hero: Hero) {
    this.heroService.deleteHero(hero.id).subscribe(() => {
      this.heroes = this.heroes.filter((selected) => selected !== hero);
    });
  }
}
