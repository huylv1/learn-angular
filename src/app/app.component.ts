import { Component, Inject } from '@angular/core';
import { config } from 'process';
import { from, Observable } from 'rxjs';
import { AppConfig, appSettings, APP_CONFIG } from './app.config';
import { Hero } from './model/hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [{ provide: APP_CONFIG, useValue: appSettings }],
})
export class AppComponent {
  title = 'myapp';
  version: number;
  hero: Hero; // = {id: undefined, name : '', team : ''};
  today: Date = new Date();

  heroes: Hero[] = [
    {
      id: 1,
      name: 'Captain America',
      team: 'avengers',
    },
    {
      id: 2,
      name: 'Black Widow',
      team: 'villains',
    },
  ];

  title$ = new Observable((observer) => {
    setInterval(() => {
      observer.next();
    }, 2000);
  });

  constructor(@Inject(APP_CONFIG) config: AppConfig) {
    this.title = config.title;
    this.version = config.version;

    // this.changeTitle(this.setTitle);
    // this.onComplete().then(this.setTitle);
    // this.title$.subscribe(this.setTitle)

    const onComObs = from(this.onComplete())
    onComObs.subscribe(this.setTitle)
  }

  private setTitle = () => {
    const timestamp = new Date().getMilliseconds();
    this.title = `Hello Angular 10 (${timestamp})`;
  };

  private changeTitle(callback) {
    setTimeout(() => {
      callback();
    }, 2000);
  }

  onLike(): void {
    window.alert(`I like ${this.hero?.name}`);
    this.hero = {
      id: 1,
      name: 'Boothstomper',
      team: 'smartosc',
    };
  }

  trackByHeroes(index: number, hero: Hero): number {
    console.log(`index : ${index} name: ${hero.name}`);
    return hero.id;
  }

  addHero() {
    // this.heroes = [...this.heroes, { id: 6, name: 'A New hero', team: '' }];
    this.heroes.push({ id: 6, name: 'A New hero', team: '' });
  }

  private onComplete() {
    return new Promise((resolve, reject) => {
      setInterval(() => {
        resolve();
      }, 2000);
    });
  }
}
