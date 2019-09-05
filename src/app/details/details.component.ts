import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../records.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  // public tvshow: import("../favorite").IMovie;
  // public tvshowName: string;
  // public condition = false; 
  public selected_show;
  // public favshow;
  // public favdb: any;
  // url_for_db = "http://localhost:3000/favorites";
  constructor(private _tvshowService: RecordsService, private activate:ActivatedRoute, private http: HttpClient) {}

  // findTVshow(x: any){

  //   this._tvshowService.getTVshowSearch(x).subscribe(tvshow => {
  //     console.log(tvshow.results);
  //     this.tvshow = tvshow;
  //     this.condition=true;
  //   });
  // }

  // markFav(favshow){
  //   this.http.post(this.url_for_db,favshow).subscribe(response_received => {
  //     console.log(response_received);

  //   });
  // }

  ngOnInit() {
    
    // this._tvshowService.getTVshow()
    // .subscribe(data =>{
    // console.log(data);
    // this.tvshow = data;
    // });

    let id=this.activate.snapshot.paramMap.get('id');
      this._tvshowService.fetch_details(id).subscribe(data => this.selected_show = data);
      console.log(this.selected_show);

      // this.http.get("http://localhost:3000/favorites").subscribe(x => {
      //   this.favdb = x;
      //   console.log(this.favdb);
      // });

 
  }

}
