import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/hero.model';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css']
})
export class AddHeroComponent implements OnInit {
  hero: Hero = {
    name: '',
    alterEgo:'',
    power: '',
    picture:''
  };
  submitted = false;
  constructor(private heroService : HeroService) { }

  ngOnInit(): void {
  }

  saveNewHero() : void {
    const data = {
      name: this.hero.name,
      alterEgo: this.hero.alterEgo,
      power:this.hero.power,
      picture: this.hero.picture
    };

    this.heroService.create(data)
    .subscribe({
      next: (message) =>{
        console.log(message);
        this.submitted = true;
      } ,
      error : (e) => console.error
    });
      
  }

  newHero() : void{
    this.submitted = false;
    this.hero = {
      name: '',
      alterEgo: '',
      power: '',
      picture:''
    };
  }

}
