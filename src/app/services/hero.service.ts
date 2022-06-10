import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../models/hero.model';
const baseUrl = 'http://localhost:8080:api/heroes';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http:HttpClient) { }
  getAllHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(baseUrl);
  }
  getById(id: any):Observable<Hero> {
    return this.http.get<Hero>('${baseUrl}/${id}');
  }
  update(id: any, heroData:Hero):Observable<Hero> {
    return this.http.put<Hero>('${baseUrl}/{id}',heroData);
  }
  delete(id: any):Observable<any> {
    return this.http.delete<any>('${baseUrl}/${id}');
  }

  create(heroData:Hero):Observable<Hero>{
    return this.http.post<Hero>(baseUrl,heroData)
  }

}
