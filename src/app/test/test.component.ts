import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../records.service';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent implements OnInit{
  public tvshow: import("../favorite").IMovie;
  public tvshowName: string;
  public condition = false;

  constructor(private _tvshowService: RecordsService) {
    
  }

  findTVshow(x: any){

    this._tvshowService.getTVshowSearch(x).subscribe(tvshow => {
      console.log(tvshow.results);
      this.tvshow = tvshow;
      this.condition=true;
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

