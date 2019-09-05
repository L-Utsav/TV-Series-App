import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../records.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent implements OnInit{
  public tvshow: import("../favorite").IMovie;
  public tvshowName: string;
  public condition = false;
  public favshow;
  url_for_db = "http://localhost:3000/favorites";

  constructor(private _tvshowService: RecordsService, private http: HttpClient) {
    
  }

  findTVshow(x: any){

    this._tvshowService.getTVshowSearch(x).subscribe(tvshow => {
      console.log(tvshow.results);
      this.tvshow = tvshow;
      this.condition=true;
    });
  }

  markFav(favshow){
    this.http.post(this.url_for_db,favshow).subscribe(response_received => {
      console.log(response_received);

    });
  }

  ngOnInit() {
    
    this._tvshowService.getTVshow()
    .subscribe(data =>{
        console.log(data);
        this.tvshow = data;
      });
  }
}

