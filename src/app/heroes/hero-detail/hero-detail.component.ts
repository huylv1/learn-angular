import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { pipe } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Hero } from 'src/app/model/hero';
import { HeroService } from '../hero.service';
import { HeroDetailService } from './hero-detail.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
  providers: [HeroDetailService],
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;
  @Input() id: number;
  @Input() name: string = 'default';

  constructor(    
    private route: ActivatedRoute,
    private heroService: HeroService
  ) {}

  ngOnInit(): void {
    // this.getHeroObs();
    //   this.route.queryParams.subscribe(params => {
    //     console.log(params);

    // });
    // console.log(this.route.snapshot.params.id);
    // this.getHeroSnap();

    // this.route.queryParamMap.subscribe(params => {
    //   console.log(params.get('sortOrder'));
    //   });

    // this.route.queryParamMap.subscribe((params) => {
    //   console.log(params.get('sortOrder'));
    // });

    this.route.data.subscribe((data: { hero: Hero }) => {
      this.hero = data.hero;
      console.log("hero  == " + this.hero)
      });
    
  }

  private getHeroSnap() {
    const id = this.route.snapshot.params['id'];
    console.log('id = ' + id);

    this.heroService.getHero(id).subscribe((hero) => (this.hero = hero));
  }

  private getHeroObs() {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          const id = +params.get('id');
          console.log('id = ' + id);
          return this.heroService.getHero(id);
        }),
        map((hero) => (this.hero = hero))
      )
      .subscribe();
  }
}
