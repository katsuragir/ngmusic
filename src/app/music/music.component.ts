import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {

  resultSearch: string = ''; 
  musics: any[] = [];

  constructor(private activatedRoute: ActivatedRoute, private appService: AppService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      console.log(id);
      this.resultSearch = id;
      this.appService.getData(id).subscribe(
        res => {
          console.log(res);
          this.musics = res.results;
        }
      );
    });
  }

}
