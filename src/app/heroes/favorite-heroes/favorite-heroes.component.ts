import { Component, Host, OnInit, Optional } from '@angular/core';
import { Hero } from 'src/app/model/hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-favorite-heroes',
  templateUrl: './favorite-heroes.component.html',
  styleUrls: ['./favorite-heroes.component.scss']
})
export class FavoriteHeroesComponent implements OnInit {

  heroes: Hero[]

  constructor(@Host() @Optional() private heroService: HeroService) { }

  ngOnInit(): void {
    // this.heroes = this.heroService.getHeroes();
  }

}
