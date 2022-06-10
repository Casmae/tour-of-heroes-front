import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/hero.model';
import { HeroService } from 'src/app/services/hero.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-list-heroes',
  templateUrl: './list-heroes.component.html',
  styleUrls: ['./list-heroes.component.css']
})
export class ListHeroesComponent implements OnInit {

  heroes?: Hero[];
  currentHero: Hero = {};
  currentIndex = -1;
  name = '';
  message = '';
  constructor(
    private heroService: HeroService,
    private route : ActivatedRoute,
    private router: Router) { }
  ngOnInit(): void {
    this.retrieveHeroes();
  }
  retrieveHeroes(): void {
    this.heroService.getAllHeroes()
      .subscribe({
        next: (data) => {
          this.heroes = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
 
  setActiveHero(hero: Hero, index: number): void {
    this.currentHero = hero;
    this.currentIndex = index;
  }

  deleteHero():void{
    this.heroService.delete(this.currentHero.id).subscribe({
      next: (res) =>{
        console.log(res);
        console.log(this.currentHero.id);
       this.message = "the Hero was  succesfully deleted";
        this.refreshList();
      },
      error: (e) => console.error(e)
    });
  }

  refreshList(): void {
    this.retrieveHeroes();
    this.currentHero = {};
    this.currentIndex = -1;
  }
 
  
}