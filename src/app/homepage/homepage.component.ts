import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  searchValue: string = '';

  constructor(private router: Router,
		private activatedRoute: ActivatedRoute,) { }

  ngOnInit(): void {

  }

  search() {
    this.router.navigate(['/search', this.searchValue], { relativeTo: this.activatedRoute });
  }

}
