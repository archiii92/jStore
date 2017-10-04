import { Component, OnInit } from '@angular/core';

import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { Hero } from './entities/hero';
import { HeroService } from './services/hero.service';

@Component({
  selector: 'j-store-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})

export class AppComponent implements OnInit{

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  title = 'jStore - it is a store for you!';
  heroes: Hero[];
  selectedHero: Hero;
}
