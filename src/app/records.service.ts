import { Injectable } from '@angular/core';
import { IMovie } from './favorite';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  private url = 'https://api.themoviedb.org/3/tv/popular?api_key=09a0e46f4321f3512aad16f3b0760da1&language=en-US&page=1';
  public tvshowName: string;

 
  constructor(private http: HttpClient) { }
  url1 : any;
  getTVshow(): Observable <IMovie> {
    return this.http.get<IMovie>(this.url);
  }

  getTVshowSearch(val): Observable <IMovie> {
    console.log(val);
    return this.http.get<IMovie>('https://api.themoviedb.org/3/search/tv?api_key=09a0e46f4321f3512aad16f3b0760da1&language=en-US&query='+val+'&page=1&include_adult=false');
      }

  fetch_details(val1): Observable <IMovie> {
    console.log(val1);
    return this.http.get<IMovie>('https://api.themoviedb.org/3/tv/'+val1+'?api_key=09a0e46f4321f3512aad16f3b0760da1&language=en-US');
  }
 

}