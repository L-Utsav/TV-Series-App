import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  constructor(private http: HttpClient) { }

  public favdb: any;
  public delfav;
  
  RemoveFromFav(fav1){
    this.delfav="http://localhost:3000/favorites/"+fav1.id;
    this.http.delete(this.delfav).subscribe(s => {
      console.log(s);
      this.ngOnInit;
    });
  }
  
  ngOnInit() {
    this.http.get("http://localhost:3000/favorites").subscribe(x => {
      this.favdb = x;
      console.log(this.favdb);
    });

  }

}
