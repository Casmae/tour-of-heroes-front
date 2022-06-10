import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from 'src/app/models/hero.model';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() currentHero: Hero = {}

  message = '';

  constructor(
    private heroService : HeroService,
    private route : ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
      this.message = '';
      this.getHero(this.route.snapshot.params["id"])
  }

  getHero(id:any): void {
    this.heroService.getById(id).subscribe({
      next: (data) => {
      console.log(id);
      this.currentHero = data;
      console.log(data);
    },
    error: (e) => console.error(e)
  });

}

 

 updateHero():void{
   this.message ='';
   this.heroService.update(this.currentHero.id,this.currentHero).subscribe({
     next: (res) =>{
       console.log(res);
       this.message = "the Hero informations were updated succesfully";
     },
     error: (e) => console.error(e)
   });
 }

}
