import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { PagerService } from '../pager.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchResult = [];
  search: string;
  page = 34;
  pagedItems: any = [];
  total_results = 0;
  total_pages: number;
  constructor(private searchService: SearchService, private pagerService: PagerService) { }

  ngOnInit(): void {
  }

  searchUsers() {

    this.searchService.getAllUsers(this.search, this.page).then(res => {

      this.searchResult = res['items']
      this.total_results = res['total_count']
      console.log(this.searchResult)
      this.total_pages = Math.floor(this.total_results / 10);

      if (this.total_pages - Math.floor(this.total_results / 10)) {
        this.total_pages = this.total_results + 1;
      }
    })

  }

  next() {
    if (this.page >= 1) {
      ++this.page
      this.searchUsers()
    }

  }
  prev() {
    if (this.page >= 1) {
      --this.page
      this.searchUsers()
    }
  }




}



