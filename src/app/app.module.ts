import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListHeroesComponent } from './components/list-heroes/list-heroes.component';
import { FormsModule } from '@angular/forms';
import  { HttpClientModule } from '@angular/common/http';
import { RouterModule,Routes } from '@angular/router';
import { AddHeroComponent } from './components/add-hero/add-hero.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
const routes: Routes = [
  {path: '', redirectTo:'heroes', pathMatch:'full'},
  {path: 'heroes', component: ListHeroesComponent},
  {path:'heroes/:id', component: HeroDetailComponent},
  {path:'add',component: AddHeroComponent}
  
]
@NgModule({
  declarations: [
    AppComponent,
    ListHeroesComponent,
    AddHeroComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
