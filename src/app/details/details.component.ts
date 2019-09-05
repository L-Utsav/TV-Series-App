import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../records.service';
import { ActivatedRoute } from '@angular/router';

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
  constructor(private _tvshowService: RecordsService, private activate:ActivatedRoute) {}

  // findTVshow(x: any){

  //   this._tvshowService.getTVshowSearch(x).subscribe(tvshow => {
  //     console.log(tvshow.results);
  //     this.tvshow = tvshow;
  //     this.condition=true;
  //   });
  // }



  ngOnInit() {
    let id=this.activate.snapshot.paramMap.get('id');
      this._tvshowService.fetch_details(id).subscribe(data => this.selected_show = data);
      console.log(this.selected_show);

    // this._tvshowService.getTVshow()
    // .subscribe(data =>{
    // console.log(data);
    // this.tvshow = data;
    // });
  }

}
