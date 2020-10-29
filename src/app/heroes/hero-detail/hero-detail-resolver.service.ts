import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';
import { Hero } from 'src/app/model/hero';
import { HeroService } from '../hero.service';

@Injectable({
    providedIn: 'root'
})
export class HeroDetailResolverService implements Resolve<Hero> {

    constructor(private heroService: HeroService) {
        
    }
    
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {
        const id = +route.paramMap.get('id');
        
        let x: Observable<Hero> = this.heroService.getHero(id).pipe(
            take(1),
            mergeMap(hero => of(hero))
        );

        return x;
    }
}
