import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() user: any;
  followers = [];
  stars = [];
  constructor(private searchService: SearchService, ) { }

  ngOnInit(): void {
    this.getFollowers();
    this.getStarred()
  }

  getFollowers() {

    this.searchService.getUrl(this.user['followers_url']).then((res: []) => {
      console.log(res)
      this.followers = res;
    })

  }
  getStarred() {

    this.searchService.getUrl(this.user['starred_url']).then((res: []) => {
      console.log(res)
      this.followers = res;
    })

  }

}
