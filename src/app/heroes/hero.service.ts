import { Injectable } from '@angular/core';
import { Hero } from '../model/hero';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeroService {
  private heroesUrl = 'api/heroes/';

  constructor(private http: HttpClient) {}

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>('api/heroes');
  }

  getHero(id: number): Observable<Hero> {
    return this.http.get<Hero>(this.heroesUrl + id);
  }

  createHero(name: string): Observable<Hero> {
    const hero = { name };
    return this.http.post<Hero>(this.heroesUrl, hero);
  }

  editHero(id: number, hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl + id, hero);
  }

  deleteHero(id: number): Observable<any> {
    return this.http.delete(this.heroesUrl + id);
  }
}
